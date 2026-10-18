# Os pacotes declaram engines.node >= 24 (package.json) — numa imagem 22 o
# `npm ci` falha a checagem de engine antes de qualquer build.
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN node ace build

# `node ace build` compila o projeto inteiro, tests/ incluso, e o stage final
# copia build/ inteiro. Sem esta limpeza os specs compilados e o bin/test.js
# que os importa viajariam para a imagem de produção.
RUN rm -rf build/tests build/bin/test.js build/bin/test.js.map

FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --from=build /app/build ./
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
EXPOSE 3000

# Sem banco: o entrypoint só faz exec no CMD (ver docker-entrypoint.sh).
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["node", "bin/server.js"]

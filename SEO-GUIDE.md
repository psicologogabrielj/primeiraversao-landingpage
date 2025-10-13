# Guia de SEO - Psicólogo Online Gabriel

## 📋 Arquivos Criados para SEO

### 1. **robots.txt** ✅
Localização: `/public/robots.txt`
- Define regras para crawlers de busca
- Referencia o sitemap
- Bloqueia arquivos desnecessários

### 2. **sitemap.xml** ✅
Localização: `/public/sitemap.xml`
- Mapa do site para motores de busca
- Lista todas as páginas/seções importantes
- Define prioridades e frequência de atualização

**📝 IMPORTANTE:** Sempre que adicionar novas páginas, atualize:
- A tag `<lastmod>` com a data atual
- Adicione novas URLs se criar novas páginas

### 3. **manifest.json** ✅
Localização: `/public/manifest.json`
- Configura o site como PWA (Progressive Web App)
- Melhora experiência mobile
- Permite instalação do site no celular
- Inclui atalhos rápidos

### 4. **humans.txt** ✅
Localização: `/public/humans.txt`
- Arquivo "humanizado" sobre o site
- Boas práticas de web

### 5. **llms.txt** ✅
Localização: `/public/llms.txt`
- Informações estruturadas para LLMs (Large Language Models)
- Ajuda IAs como ChatGPT, Claude, Gemini a entenderem melhor o site
- Contém contexto sobre serviços, especialidades e informações importantes
- Padrão: https://llmstxt.org/

### 6. **_headers** ✅
Localização: `/public/_headers`
- Configurações de cache e segurança
- Otimiza performance
- Headers de segurança

### 7. **security.txt** ✅
Localização: `/public/.well-known/security.txt`
- Informações de contato para segurança
- Padrão RFC 9116

## 🔧 Próximos Passos Importantes

### 1. **URLs** ✅
✅ **CONCLUÍDO!** Todas as URLs já foram configuradas para: `https://gabrieljesuspsicologo.com.br`
- ✅ `index.html` 
- ✅ `robots.txt`
- ✅ `sitemap.xml`
- ✅ `security.txt`
- ✅ `scripts/generate-sitemap.js`

### 2. **Criar Ícones PWA**
O manifest.json está configurado para usar ícones. Você deve criar/adicionar:
- Ícone 192x192 pixels
- Ícone 512x512 pixels
- Formato recomendado: PNG ou WebP

### 3. **Google Search Console**
1. Acesse: https://search.google.com/search-console
2. Adicione sua propriedade (site)
3. Envie o sitemap: `https://seu-site.com/sitemap.xml`
4. Monitore indexação e erros

### 4. **Bing Webmaster Tools**
1. Acesse: https://www.bing.com/webmasters
2. Adicione seu site
3. Envie o sitemap

### 5. **Google Analytics** ✅
Já configurado no projeto em `/src/lib/ga.ts`

## 📊 Checklist de SEO Técnico

### ✅ Já Implementado
- [x] Meta tags (título, descrição, keywords)
- [x] Open Graph (Facebook, LinkedIn)
- [x] Twitter Cards
- [x] Schema.org (dados estruturados)
- [x] Robots.txt
- [x] Sitemap.xml
- [x] Manifest.json (PWA)
- [x] Canonical URL
- [x] Tags de idioma (pt-BR)
- [x] Google Analytics

### 📝 Para Fazer Manualmente

#### **Desempenho**
- [ ] Comprimir imagens (use WebP)
- [ ] Lazy loading de imagens
- [ ] Minificar CSS/JS (Vite já faz isso no build)
- [ ] Usar CDN para assets

#### **Conteúdo**
- [ ] Criar blog com artigos sobre saúde mental
- [ ] Adicionar FAQ com mais perguntas
- [ ] Criar páginas específicas por especialidade:
  - `/ansiedade`
  - `/depressao`
  - `/tdah`
  - `/autoestima`

#### **Links**
- [ ] Criar backlinks (parcerias com outros sites)
- [ ] Cadastrar em diretórios de psicólogos
- [ ] Criar perfis em redes sociais e linkar ao site

#### **Local SEO**
- [ ] Cadastrar no Google Meu Negócio (se atender presencial)
- [ ] Adicionar avaliações de pacientes

## 🎯 Palavras-chave Principais

Já otimizado para:
- psicólogo online
- terapia cognitivo comportamental
- ansiedade
- depressão
- TDAH
- autoestima
- conflitos amorosos
- psicoterapia online
- desenvolvimento pessoal
- psicólogo são paulo

## 🔍 Ferramentas Úteis

### **Análise de SEO**
- Google Search Console: https://search.google.com/search-console
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- Lighthouse (DevTools do Chrome)

### **Teste de Meta Tags**
- Meta Tags Debugger: https://metatags.io/
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

### **Teste de Mobile**
- Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

### **Schema.org Validator**
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/

## 📱 Performance Mobile

O site já está otimizado para mobile com:
- Design responsivo
- Meta viewport configurada
- PWA configurado
- Ícones e splash screens

## 🚀 Comandos Úteis

```bash
# Build de produção
npm run build

# Preview do build
npm run preview

# Análise do bundle
npm run build -- --mode=analyze
```

## 📈 Monitoramento

### **Métricas Importantes**
1. **Core Web Vitals**
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

2. **Taxa de Conversão**
   - Cliques no WhatsApp
   - Tempo na página
   - Taxa de rejeição

3. **Indexação**
   - Páginas indexadas no Google
   - Erros de rastreamento
   - Backlinks

## 🔐 Segurança

Headers de segurança já configurados em `_headers`:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

## ✨ Dicas Extras

1. **Conteúdo Regular**: Publique conteúdo novo regularmente
2. **Velocidade**: Mantenha o site rápido
3. **Mobile First**: Sempre teste no celular
4. **Acessibilidade**: Use alt text em imagens
5. **HTTPS**: Sempre use conexão segura
6. **SSL**: Certifique-se de ter certificado SSL válido

---

**Nota**: Lembre-se de atualizar o `sitemap.xml` sempre que adicionar novas páginas ou fazer alterações significativas no site!

**Última atualização**: 13 de outubro de 2025


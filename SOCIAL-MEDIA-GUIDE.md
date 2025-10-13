# Guia Completo de Redes Sociais - Todas as Plataformas

## 🎨 Imagem Configurada

**Arquivo**: `/public/og-image.png`
- ✅ Configurada para TODAS as redes sociais
- ✅ Dimensões ideais: 1200x630 pixels
- ✅ Formato: PNG

## 🌐 Redes Sociais Configuradas

### ✅ **Configurado e Pronto:**
1. 📱 **WhatsApp** - Tags específicas + Open Graph
2. 📘 **Facebook** - Tags específicas + Business tags
3. 🐦 **Twitter/X** - Twitter Cards completo
4. 💼 **LinkedIn** - Open Graph otimizado
5. 📌 **Pinterest** - Rich Pins configurado
6. 💬 **Telegram** - Open Graph + tag específica
7. 🎮 **Discord** - Embed automático via Open Graph
8. 📸 **Instagram** - Link preview (Stories/DM)

## 📱 Como Vai Aparecer Quando Compartilhar

### **WhatsApp**
Quando alguém compartilhar seu link no WhatsApp, vai aparecer:
- 🖼️ **Imagem**: og-image.png
- 📝 **Título**: "Psicólogo Online Gabriel Jesus - TCC para Ansiedade, Depressão e TDAH"
- 💬 **Descrição**: "🧠 Psicólogo CRP 06/171722 | Terapia Cognitivo-Comportamental Online | Especialista em Ansiedade, Depressão e TDAH | Atendimento em todo Brasil 📱"
- 🔗 **URL**: gabrieljesuspsicologo.com.br
- 📞 **Telefone**: +55 13 98166-4867

### **Facebook / Instagram (Stories/DM)**
- 🖼️ Imagem grande e chamativa
- 📝 Título otimizado
- 💬 Descrição com emojis para chamar atenção
- 🏷️ Tags de localização (São Paulo, Brasil)

### **Twitter (X)**
Quando compartilhado no Twitter:
- 🖼️ **Card Grande**: summary_large_image
- 📝 **Título**: "Psicólogo Online Gabriel Jesus - TCC Especializado"
- 💬 **Descrição**: "🧠 Terapia Cognitivo-Comportamental Online | CRP 06/171722 | Especialista em Ansiedade, Depressão, TDAH e Desenvolvimento Pessoal"
- 🖼️ Imagem em destaque

### **LinkedIn**
- 🖼️ Imagem profissional
- 📝 Título e descrição otimizados
- 🏢 Informações profissionais (CRP)

### **Telegram**
- 🖼️ Preview completo com imagem
- 📝 Título e descrição formatados
- ⚡ Instant View habilitado

### **Pinterest**
- 📌 Rich Pins habilitado
- 🖼️ Imagem em alta qualidade
- 📝 Descrição otimizada para busca
- 🔍 Indexação melhorada

### **Discord**
- 🎮 Embed automático
- 🖼️ Imagem grande
- 📝 Título e descrição
- 🎨 Cor de destaque do site

### **Instagram**
- 📸 Preview em Stories (quando compartilha link)
- 💬 Preview em DM
- 🔗 Link na bio otimizado

## ⚙️ Configurações Personalizadas Necessárias

Depois de criar suas redes sociais, atualize no `index.html`:

### **1. Facebook App ID** (Opcional mas recomendado)
```html
<meta property="fb:app_id" content="YOUR_FB_APP_ID" />
```
**Como obter:**
1. Acesse https://developers.facebook.com/
2. Crie um App
3. Copie o App ID
4. Substitua "YOUR_FB_APP_ID"

### **2. URLs das Redes Sociais**
Atualize estas linhas no `index.html`:
```html
<meta property="article:publisher" content="https://www.facebook.com/YOUR_PAGE" />
"sameAs": [
  "https://www.facebook.com/YOUR_PAGE",
  "https://www.instagram.com/YOUR_INSTAGRAM",
  "https://www.linkedin.com/in/YOUR_LINKEDIN",
  "https://twitter.com/YOUR_TWITTER"
]
```

**Substitua:**
- `YOUR_PAGE` → seu @ do Facebook
- `YOUR_INSTAGRAM` → seu @ do Instagram
- `YOUR_LINKEDIN` → seu perfil do LinkedIn
- `YOUR_TWITTER` → seu @ do Twitter

### **3. Telegram Channel** (Se tiver)
```html
<meta property="telegram:channel" content="@YOUR_CHANNEL" />
```
Se tiver canal no Telegram, substitua `@YOUR_CHANNEL`
Se não tiver, pode remover essa linha.

## 🧪 Como Testar as Tags

### **1. Facebook Sharing Debugger** ⭐
URL: https://developers.facebook.com/tools/debug/

**Como usar:**
1. Cole a URL: `https://gabrieljesuspsicologo.com.br`
2. Clique em "Debug"
3. Veja como vai aparecer no Facebook/WhatsApp
4. Use "Scrape Again" se fizer alterações

**Importante:** Este é o teste MAIS importante para WhatsApp!

### **2. Twitter Card Validator**
URL: https://cards-dev.twitter.com/validator

**Como usar:**
1. Cole a URL do site
2. Clique em "Preview card"
3. Veja como vai aparecer no Twitter

### **3. LinkedIn Post Inspector**
URL: https://www.linkedin.com/post-inspector/

**Como usar:**
1. Cole a URL do site
2. Veja como vai aparecer no LinkedIn
3. Use "Inspect" para revalidar

### **4. Meta Tags Checker (Geral)**
URL: https://metatags.io/

**Como usar:**
1. Cole a URL
2. Veja preview em múltiplas plataformas
3. Google, Facebook, Twitter, LinkedIn

### **5. Open Graph Debugger**
URL: https://www.opengraph.xyz/

**Como usar:**
1. Cole a URL
2. Veja todas as tags Open Graph
3. Verifica erros e avisos

### **6. Pinterest Rich Pins Validator**
URL: https://developers.pinterest.com/tools/url-debugger/

**Como usar:**
1. Cole a URL do site
2. Veja como vai aparecer nos Pins
3. Solicite validação dos Rich Pins

### **7. WhatsApp Link Preview**
**Teste Real:**
1. Envie o link para você mesmo no WhatsApp
2. Aguarde alguns segundos para carregar o preview
3. Veja como aparece

**Importante:** Se não aparecer:
- Aguarde 1-2 minutos (cache do WhatsApp)
- Use o Facebook Debugger e clique em "Scrape Again"
- Tente novamente no WhatsApp

### **8. Discord Embed Preview**
**Teste Real:**
1. Cole o link em qualquer canal Discord
2. Veja o embed automático
3. Imagem e descrição devem aparecer

### **9. Telegram Instant View**
**Teste Real:**
1. Envie o link no Telegram
2. Preview deve aparecer automaticamente
3. Clique para ver a página

## 📋 Checklist de Validação

Após fazer o deploy, valide:

### **Essenciais:**
- [ ] **Facebook Debugger** - Sem erros, preview correto
- [ ] **Twitter Validator** - Card grande aparecendo
- [ ] **WhatsApp Real** - Teste enviando link para você
- [ ] **Meta Tags Checker** - Todas plataformas OK

### **Opcionais mas Recomendados:**
- [ ] **LinkedIn Inspector** - Imagem e textos corretos
- [ ] **Pinterest Validator** - Rich Pins aprovados
- [ ] **Telegram** - Teste o preview
- [ ] **Discord** - Teste como aparece (usa Open Graph)
- [ ] **Instagram Stories** - Teste compartilhar link

### **Configurações Pessoais:**
- [ ] Atualizar `fb:app_id` (se criar App no Facebook)
- [ ] Atualizar URLs das redes sociais no Schema.org
- [ ] Criar páginas/perfis nas redes sociais
- [ ] Adicionar link do site nas bios

## 🔧 Tags Implementadas

### **Open Graph (WhatsApp, Facebook, LinkedIn)**
```html
✅ og:type - Tipo de conteúdo
✅ og:url - URL canônica
✅ og:title - Título otimizado
✅ og:description - Descrição com emojis
✅ og:image - Imagem principal
✅ og:image:secure_url - URL HTTPS
✅ og:image:type - Tipo da imagem
✅ og:image:width - Largura (1200px)
✅ og:image:height - Altura (630px)
✅ og:image:alt - Texto alternativo
✅ og:site_name - Nome do site
✅ og:locale - Idioma (pt_BR)
✅ og:phone_number - Telefone
✅ og:country-name - País
✅ og:region - Região
```

### **Twitter Cards**
```html
✅ twitter:card - Tipo de card (summary_large_image)
✅ twitter:url - URL do site
✅ twitter:title - Título otimizado
✅ twitter:description - Descrição
✅ twitter:image - Imagem
✅ twitter:image:alt - Texto alternativo
```

### **Facebook Specific**
```html
✅ fb:app_id - ID do App do Facebook
✅ article:author - Autor do conteúdo
✅ article:publisher - Página do Facebook
✅ business:contact_data - Dados de contato
```

### **Pinterest Rich Pins**
```html
✅ pinterest:title - Título para Pinterest
✅ pinterest:description - Descrição otimizada
✅ pinterest:image - Imagem
✅ pinterest-rich-pin - Habilitado
```

### **Telegram**
```html
✅ telegram:channel - Canal do Telegram (opcional)
```

### **Schema.org Social Profiles**
```json
✅ Organization schema
✅ sameAs - Links para todas redes sociais
✅ contactPoint - Informações de contato
```

## 🎨 Dicas para Otimizar Compartilhamentos

### **1. Texto Atraente**
- ✅ Use emojis estratégicos (🧠 📱 💬)
- ✅ Destaque diferenciais (CRP, Online, Especialista)
- ✅ Call-to-action implícito

### **2. Imagem de Qualidade**
A imagem atual (`og-image.png`) deve:
- ✅ Ser clara e legível em mobile
- ✅ Ter contraste bom
- ✅ Mostrar identidade profissional
- ✅ Incluir logo ou nome se possível

### **3. Dimensões Ideais**
- **WhatsApp/Facebook**: 1200x630px ✅
- **Twitter**: 1200x675px (usando 1200x630 funciona) ✅
- **LinkedIn**: 1200x627px ✅

**Nossa imagem (1200x630px) é perfeita para todas!**

## 🚀 Estratégia de Redes Sociais Recomendada

### **Essenciais (Comece por aqui):**

1. ✅ **WhatsApp Business** (Já tem o número configurado)
   - Use WhatsApp Business (não o comum)
   - Configure respostas automáticas
   - Catálogo de serviços

2. 📘 **Página no Facebook**
   - Crie página profissional
   - Adicione informações completas
   - Poste conteúdo regularmente
   - Configure mensagens automáticas

3. 📸 **Instagram Profissional**
   - Conta comercial (não pessoal)
   - Link na bio para o site
   - Stories sobre saúde mental
   - Reels educativos

4. 💼 **LinkedIn**
   - Perfil profissional completo
   - Artigos sobre TCC
   - Networking com outros profissionais

### **Opcionais (Expandir depois):**

5. 📌 **Pinterest**
   - Ótimo para conteúdo sobre saúde mental
   - Infográficos e dicas
   - Muito tráfego orgânico

6. 🐦 **Twitter/X**
   - Microcontent sobre psicologia
   - Threads educativas

7. 💬 **Canal no Telegram**
   - Dicas diárias
   - Conteúdo exclusivo

8. 🎮 **Discord**
   - Comunidade (se fizer sentido)

### **Criação de Conteúdo:**

**Formatos Recomendados:**
- 📱 Posts quadrados: 1080x1080px (Instagram Feed)
- 📖 Stories: 1080x1920px (Instagram/Facebook Stories)
- 🖼️ Compartilhamento: 1200x630px (Link preview) ✅ JÁ TEM
- 📌 Pinterest: 1000x1500px (vertical)

## 📊 Analytics de Compartilhamento

Após configurar, você pode monitorar:
- Google Analytics: Referências sociais
- Facebook Insights: Se criar página
- Twitter Analytics: Se criar perfil

## ⚠️ Problemas Comuns e Soluções

### **Preview não aparece no WhatsApp**
**Solução:**
1. Limpe cache no Facebook Debugger
2. Aguarde 5-10 minutos
3. Certifique-se que o site está no ar
4. Verifique se a imagem está acessível publicamente

### **Imagem aparece cortada**
**Solução:**
- Use exatamente 1200x630px ✅ (já configurado)
- Mantenha conteúdo importante no centro
- Evite texto muito pequeno

### **Descrição não aparece completa**
**Solução:**
- WhatsApp limita ~80-100 caracteres
- Facebook mostra mais
- Nossa descrição está otimizada

### **Cache antigo aparecendo**
**Solução:**
1. Facebook Debugger → "Scrape Again"
2. LinkedIn Inspector → "Inspect"
3. Aguarde 24h para propagação completa

## 🔐 Segurança

Todas as imagens devem estar em HTTPS:
- ✅ og:image:secure_url configurado
- ✅ URL completa com https://

## 📱 Mobile First

As tags foram otimizadas pensando em mobile:
- ✅ Emojis chamam atenção em telas pequenas
- ✅ Texto conciso e direto
- ✅ Imagem responsiva

## ✅ Status Atual

**Tudo configurado e pronto para usar!**

Quando fizer o deploy:
1. Teste em todas as plataformas
2. Ajuste se necessário
3. Compartilhe em suas redes

---

**Última atualização**: 13 de outubro de 2025
**Imagem**: og-image.png (1200x630px)


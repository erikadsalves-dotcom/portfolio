# Design System — Contexto de Transição

## Arquivo Figma
URL: https://www.figma.com/design/EcZiGb7SKGMpRlKQgZTiZh
FileKey: `EcZiGb7SKGMpRlKQgZTiZh`
Portfólio de Érika de Sousa Alves — site estático em HTML puro (sem framework).

---

## O que já foi criado

### Variáveis
- **Primitives** — 7 cores brutas: black #0f0f0f, white #fafaf8, gray #8a8a82, light #f0ede8, accent #c8b89a, green #4caf7d, border #e0ddd8
- **Color** — 10 tokens semânticos aliasados: color/bg/default, color/bg/subtle, color/text/primary, color/text/secondary, color/text/inverse, color/border/default, color/accent/default, color/accent/success
- **Spacing** — 8 tokens: xs=4, sm=8, md=16, lg=24, xl=32, 2xl=48, 3xl=64, 4xl=80
- **Radius** — 6 tokens: none=0, sm=4, md=8, lg=12, xl=16, full=9999

### Text Styles (12 estilos)
- DM Serif Display: Display/2XL (72), Display/XL (56), Display/L (48), Heading/H1 (40), Heading/H2 (32), Heading/H3 (24)
- DM Sans: Body/L (18), Body/M (16), Body/S (14), Label/M (14 semibold), Label/S (12 semibold), Caption (12)

### Páginas
1. **Cover** — vazia, pronta para capa
2. **Foundations** — swatches de cor com variáveis vinculadas
3. **Typography** — specimens dos 12 estilos
4. **Spacing & Radius** — barras visuais de spacing + boxes de radius
5. **— Components —** — vazia, pronta para receber componentes

---

## O que falta

### Componentes (não criados ainda)
- Button (primary, secondary, ghost — sizes: sm, md, lg — states: default, hover, disabled)
- Tag / Badge
- Nav Bar
- Card (projeto do portfolio)
- Skill Card
- Stat

### Decisão em aberto
O portfolio é HTML puro (não React). A conversa anterior levantou a questão de Storybook vs Figma — a decisão foi não tomada. Para HTML puro, Figma com Component Sets é suficiente.

---

## Próximos passos
1. Criar componentes na página "— Components —" um por vez
2. Começar pelo Button (mais fundamental, outros dependem dele)
3. Validar com screenshot após cada componente

## Ferramenta
`mcp__plugin_figma_figma__use_figma` — disponível quando o servidor `plugin:figma:figma` está conectado e autenticado.
Para usar, invocar a skill `figma:figma-use` antes de cada chamada.

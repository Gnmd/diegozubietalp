# Dr. Diego Zubieta — Landing page

Landing page do Dr. Diego Zubieta, médico (CRM/SP 246.697) residente do último ano de psiquiatria no Instituto Bairral.

Projeto exportado do Hostinger Horizons: React 18 + Vite + Tailwind CSS, em `apps/web`.

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # gera dist/apps/web
```

As seções da página ficam em `apps/web/src/components/` (Header, Hero, About, AreasAtuacao, Formacao, Agendamento, Footer) e são montadas em `apps/web/src/App.jsx`.

As imagens (logo e foto) ficam em `apps/web/public/images/` e são referenciadas em `apps/web/src/lib/images.js`.

## Deploy (Cloudflare Workers)

O site é publicado como arquivos estáticos em um Worker da Cloudflare (`wrangler.jsonc`).

**Pelo painel (deploy automático a cada push):** Workers & Pages → Create → Import a repository → escolha este repositório e use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

**Pela linha de comando:** `npx wrangler login` e depois `npm run deploy`.

Cabeçalhos HTTP (cache e segurança) ficam em `apps/web/public/_headers`.

## Páginas

- `/` — site principal (`apps/web/index.html`, `src/App.jsx`).
- `/links/` — página de links para a bio do Instagram (`apps/web/links/index.html`, `src/pages/LinksPage.jsx`).

O card de compartilhamento (`public/images/og-card.jpg`) é gerado a partir de `apps/web/tools/og-card.html`.

## Materiais

- `/plano-de-crise.pdf` — plano de crise para pacientes (A4, 2 páginas), gerado a partir de `apps/web/tools/plano-de-crise.html` com `node apps/web/tools/plano-de-crise.mjs` (requer `playwright`).

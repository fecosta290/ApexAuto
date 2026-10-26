# APEX Auto Detailing

Landing page demonstrativa criada para apresentar a qualidade de projetos da FE COSTA ao segmento de estética automotiva.

## Executar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Publicar no GitHub Pages

1. Crie um repositório e envie este projeto para a branch `main`.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **GitHub Actions**.
4. O workflow calcula o caminho pelo nome real do repositório e publica após cada push na `main`.

Para gerar localmente com o mesmo caminho, defina `VITE_BASE_PATH=/nome-do-repositorio/` antes do build.

## Personalizar para um cliente real

- `src/config/site.ts`: marca, slogan, WhatsApp, endereço, horários, serviços, textos, imagens e links.
- `src/styles/global.css`: identidade visual, tipografia, espaçamentos e animações.
- `public/images/`: fotografias do projeto.
- `index.html`: metadados de SEO e Open Graph.

O WhatsApp fica seguro enquanto o número estiver vazio ou inválido: os botões levam à seção de contato.

## Tecnologias

React, TypeScript, Vite, Tailwind CSS, Lucide React e CSS personalizado.

# Carlos Eduardo Hilario Ferreira · Cybersecurity Portfolio

Portfólio técnico estático (HTML + CSS + JS vanilla), feito para o **GitHub Pages**.
Sem backend, sem build, sem dependências e sem fontes externas.

```
I BUILD SYSTEMS.
I BREAK SYSTEMS.
I SECURE SYSTEMS.
```

## Estrutura

```
/
├── index.html            # página única (seções por âncora)
├── assets/
│   ├── css/style.css     # tema: preto + cinza escuro + verde terminal
│   └── js/
│       ├── data.js       # TODO o conteúdo editável (projetos, labs, CTFs, certs, links)
│       └── main.js       # renderização dos cards, i18n EN/PT, animações
├── .nojekyll
└── README.md
```

## Como editar o conteúdo

Tudo fica em `assets/js/data.js`:

| Objeto            | Seção                      |
|-------------------|----------------------------|
| `SITE`            | nome, GitHub, LinkedIn, e-mail |
| `PROJECTS`        | Offensive Security → Projects |
| `LABS`            | Security Labs              |
| `OPERATIONS`      | CTF / Operations (log)     |
| `CERTS`           | Certifications / Learning  |

- `status`: `COMPLETED` · `IN PROGRESS` · `PLANNED` · `PLACEHOLDER`
- `type`: `LAB` · `PROJECT` · `STUDY` · `CERTIFICATION`
- Textos aceitam string simples ou `{ en: "...", pt: "..." }`.
- Link vazio (`""`) → o botão aparece desativado.

Para adicionar um lab, copie o objeto `LAB-001` em `LABS`, mude o `id` e preencha. Não é preciso mexer no HTML.

Textos fixos das seções: inglês no `index.html`, português no objeto `PT` em `main.js` (mesma chave `data-i18n`).

## Publicar no GitHub Pages

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<usuario>/<usuario>.github.io.git
git push -u origin main
```

No GitHub: **Settings → Pages → Source: `main` / `(root)`**.
Com o repositório chamado `<usuario>.github.io`, o site fica em `https://<usuario>.github.io/`.

## Checklist antes de divulgar

- [ ] `SITE.github`, `SITE.linkedin`, `SITE.email` preenchidos
- [ ] `og:url` no `index.html` com a URL final
- [ ] Placeholders trocados por conteúdo real (ou removidos)
- [ ] Testado em desktop e celular, EN e PT

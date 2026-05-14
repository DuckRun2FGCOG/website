# Claude guidance for this repo

## i18n — always update both languages

This site is bilingual: **Spanish** (default) and **English**. Whenever you touch any user-visible text, you must update both translation files:

- `src/es/es.11tydata.js` — Spanish strings (keys under `t.*`)
- `src/en/en.11tydata.js` — English strings (same key structure)

Never add a key to one file without adding the equivalent key to the other. Never leave a string hardcoded in a template — all text goes through `{{ t.* }}`.

## Adding a new page

1. Create both `src/es/<slug>.njk` and `src/en/<slug>.njk`
2. Add nav label + slug to **both** `es.11tydata.js` and `en.11tydata.js`
3. Add a nav `<li>` entry in `src/_includes/nav.njk`
4. Set `altUrl` frontmatter in each page to its counterpart URL

## URL filter in templates

In Nunjucks, `|` binds more tightly than `+`. Always wrap concatenated paths in parentheses before piping to `| url`:

```njk
{{ ('/' + lang + '/') | url }}          {# correct #}
{{ '/' + lang + '/' | url }}            {# BUG: prefix gets appended, not prepended #}
```

## Build

```bash
npm install && npm run build   # output → _site/
npm start                      # dev server at localhost:8080
```

`PATH_PREFIX` env var sets the URL path prefix for CI deploys (set automatically in GitHub Actions).

## Stack

- Eleventy v3 + Nunjucks templates
- Vanilla CSS with CSS custom properties (`src/assets/css/main.css`)
- Vanilla JS for mobile nav (`src/assets/js/main.js`)
- GitHub Pages via `gh-pages` branch; PR previews at `/pr-preview/pr-{N}/`

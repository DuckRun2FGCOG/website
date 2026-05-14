# FGCOG Duck Run 2 — Website

Website for the Full Gospel Church of God congregation in Duck Run 2, Cayo District, Belize.

**Live site:** https://duckrun2fgcog.github.io/website/

## Stack

- [Eleventy (11ty)](https://www.11ty.dev/) static site generator with Nunjucks templates
- Vanilla CSS (mobile-first, no framework)
- Vanilla JavaScript (mobile nav toggle only)
- GitHub Actions CI/CD → GitHub Pages

## Development

```bash
npm install
npm start        # dev server at http://localhost:8080
npm run build    # production build → _site/
```

## i18n

Default language is **Spanish** (`/es/`). English is at `/en/`. The root `/` redirects to `/es/`.

Translations live in the directory data files:
- `src/es/es.11tydata.js` — all Spanish strings
- `src/en/en.11tydata.js` — all English strings

**When adding or changing any text, always update both files.**

Each page declares its counterpart via `altUrl` frontmatter, which powers the language switcher in the nav.

## Adding a new page

1. Create `src/es/nueva-pagina.njk` and `src/en/new-page.njk`
2. Add the nav label and slug to both `es.11tydata.js` and `en.11tydata.js`
3. Update `src/_includes/nav.njk` to add the new nav entry
4. Set `altUrl` in each page's frontmatter to point to its counterpart

## Deployment

- **Push to `main`** → GitHub Actions builds and deploys to `gh-pages` branch → GitHub Pages
- **Open a PR** → GitHub Actions builds a preview at `/pr-preview/pr-{N}/es/` and comments the URL on the PR

The `PATH_PREFIX` env var controls the path prefix for asset and nav URLs. Set automatically by CI; defaults to `/` for local dev.

## Project info

- **Location:** Duck Run 2, Cayo District, Belize
- **Pastor:** Ismael Rodríguez
- **National body:** [Full Gospel Church of God Belize](https://www.facebook.com/fgcogbz)

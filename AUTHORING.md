# Writing for Astriferous

Each constellation has a folder under `src/content/articles/`. Add an article as a Markdown file in the matching folder; the folder name determines which constellation section contains it.

## Add an article

1. Open a constellation folder, such as `src/content/articles/orion/`.
2. Copy `_new-article.md` to a new file with a descriptive name, such as `the-winter-hunter.md`.
3. Edit the title and article text. Keep `draft: true` while writing; change it to `draft: false` when it is ready to publish.
4. Save, then preview with `npm run dev` from the project folder.

Example:

```md
---
title: The Winter Hunter
idea: An optional short phrase above the title
draft: true
---

Write the article here in Markdown.
```

Use one of the existing folders: `ursa-major`, `centaurus`, `lynx`, `perseus`, `orion`, `musca`, `octans`, `fornax`, `serpens`, `sagittarius`, `cassiopeia`, or `equuleus`. The folder is authoritative even if the optional `constellation` frontmatter is present. You can set `order: 1` to place an article before articles without an explicit order. Lower numbers come first; ties, and all articles without an order, sort by title alphanumerically (so `2` comes before `10`).

New Markdown files are included in the next production build and deployment. The live site does not watch your computer's folders, so adding or editing an article requires publishing the changed files to GitHub to trigger a new Vercel deployment.

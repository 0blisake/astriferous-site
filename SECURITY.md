# Security notes

Astriferous is a statically generated reading site. It has no accounts, search, comments, forms, server routes, or visitor-submitted content. Markdown articles are trusted source files maintained by the site owner.

## Deployment headers

`vercel.json` applies a Content Security Policy and browser security headers to deployed paths. The policy permits only the site's own scripts plus the Google Tag Manager container and the Google Analytics endpoints in use. It also permits the Google Fonts stylesheet and font host used by the current design.

The `script-src` policy contains a SHA-256 hash for the small inline Google tag bootstrap in `src/pages/index.astro`. If that script changes, recalculate its hash from the generated `dist/index.html` and update `vercel.json`; otherwise browsers will block the bootstrap. If the GTM container is changed to load new third-party tags, review those required origins and confirm the policy with Google Tag Assistant before publishing.

These headers take effect after the Vercel deployment is updated. Check the deployed response headers after publishing. Keep the CSP narrow and do not add `unsafe-eval` or `unsafe-inline` to `script-src` to silence violations.

Google Tag Manager is a trusted third-party code path: anyone who can publish changes to the container may add code that runs for site visitors. Protect the associated Google account with two-step verification and keep container publish access limited to trusted people.

## Dependencies

Keep `package-lock.json` committed and review `npm audit` whenever dependencies change. The local npm configuration may run in offline mode; an offline audit can miss advisories published after its cached data was last refreshed, so repeat the audit with registry access available.

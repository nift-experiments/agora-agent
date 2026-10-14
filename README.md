# Agora documentation: Nift + TanStack, maintained React content

This independent agent-oriented experiment retains Agora's TanStack Start/Router, React and Fumadocs application while maintaining already compiled React article modules and an explicit catalog. The global implementation reproduces the complete reference route and non-bundle publication scope from clean GitHub clones. Regional deployment and external-service qualifications remain explicit below.

Upstream source is [AgoraIO/docs-portal](https://github.com/AgoraIO/docs-portal), pinned to `3c6552914e6cec74ab5d9c38b3bd4eeb51871d13`. Apache 2.0 attribution and licensing are retained. See [UPSTREAM.md](UPSTREAM.md), [MIGRATION.md](MIGRATION.md), [HANDOVER.md](HANDOVER.md) and [investigation/STATUS.md](investigation/STATUS.md).

## Build and serve

Prerequisites: Nift 4.12.0, Bun 1.4.3, Node compatible with upstream's `>=22.12.0` requirement, and Python 3 for the simple local preview. Ensure `nift` and `bun` are on `PATH`.

```sh
bun run install:app
bun run build
bun run serve
```

Open `http://127.0.0.1:4191/`. Output is the **root `public/` directory**. `bun run build:full` forces route rendering and Nift composition while retaining the reusable application bundle. Fresh application-state publication also removes derived caches/bundles; maintained React modules and catalog remain inputs and must never be deleted as build cache.

Use root commands for complete publication. The adapted `app/` package's `build` and `build:static` scripts also delegate to the root agent pipeline. Isolated application or generator subcommands are not complete publication measurements. Bare `nift build` invokes the agent preparation hook; additions/removals that alter tracked routes should use `bun run build`.

The Python preview serves generated files without Vercel redirect, conditional Markdown or fallback semantics. Generated deep-link directories work directly; hosting rules are validated separately.

## Maintained source and ownership

- **Articles:** `maintained/__nift/content/*.mjs` are maintained React ESM, not disposable outputs.
- **Catalog:** `maintained/__nift/content-metadata.json` contains authoritative frontmatter, TOC, structured data, processed Markdown (`_markdown`) and raw search text (`_raw`).
- **Paths and bridges:** `maintained/__nift/content-manifest.json` and `runtime-*.mjs` link articles to the shared app runtime.
- **Navigation/API:** retain structured metadata in `app/content/docs` and specifications in `app/content/openapi`.
- **Application:** retain components, Router routes, styles and interaction logic in `app/src`.

For an article edit, coordinate its ESM implementation and affected catalog projections. Route changes also update manifest/catalog keys and navigation. Do not edit generated `app/public` or root `public` as maintained source. Catalog-only edits affect publication identities, preventing stale content/payload/browser caches. See [tools/RENDERED-SOURCE.md](tools/RENDERED-SOURCE.md).

```text
maintained React ESM + explicit catalog + navigation/OpenAPI
  → maintained-content publication (no Markdown compiler)
  → upstream semantic payload/search/Markdown/LLM projections
  → retained TanStack application bundle + route SSR
  → Nift composition + maintained static assets
  → public/
```

This intentionally differs from authored `agora`. Routine builds do not compile Markdown/MDX. Processed Markdown and raw text are maintained projections for downloads, LLM outputs and search; they do not trigger Markdown rendering. React modules preserve interactive document components rather than disconnected HTML snapshots. Route SSR uses bounded renderer workers. Runtime bridges share the app's React/components across SSR and browser loading. TanStack hydration, routing, navigation and history remain retained behavior; Vite builds the reusable application bundle.

Generated `app/public/__nift`, `app/public/__static`, `app/dist`, `.generated`, `content/generated` and root `public` are derived outputs. **`maintained/` is not a cache.**

## Dates, regions and external services

`app/src/generated/docs-last-updated-manifest.ts` is an intentionally maintained **immutable seed from the pinned upstream full Git history**. Do not regenerate it from migration import commits or build time. Intentional editorial date changes/new paths require explicit metadata updates coordinated with the catalog.

Default publication uses upstream global/English semantics. CN/Chinese is separate and requires `VITE_DOCS_REGION=cn` plus an explicit intended `SITE_URL`. Both languages' maintained inputs do not imply simultaneous complete regional publications. CN search, links and routes require separate certification.

Global search retains the upstream Algolia contract and local Orama fallback. External Algolia index updates (`search:sync`) are outside production builds and need an authorized credentials/service workflow. CDN images and external integrations remain references unless explicitly frozen. API playground behavior follows upstream; no private backend access is implied.

## Hosting and evidence

Root `vercel.json` preserves all upstream redirect, conditional-route and bulk-redirect rules; only root install/build/output settings are adapted. The bulk redirect file is retained byte-for-byte; `vercel.base.json` preserves its corresponding contract. The reference `app/serve.json` points to `_shell.html`, which is not a migrated output, so that rewrite is not copied to the root. Publication contains generated route HTML and application index/404 files. Deployment build images must supply the verified Nift CLI; installing app dependencies does not install Nift. Hosting configuration is not deployment certification.

Raw benchmark logs, screenshots and frozen references belong in canonical evidence storage outside this source repository. Complete pipeline accounting, serialized observations, aggregate process-tree RSS, output correctness and independent clean-clone certification remain required. No final benchmark numbers or Labs publication are approved here.

The pinned three-page projection fallback is documented in [tools/PROJECTION-COMPATIBILITY.md](tools/PROJECTION-COMPATIBILITY.md). It preserves upstream downloads and payload metadata without disabling the working browser article modules.

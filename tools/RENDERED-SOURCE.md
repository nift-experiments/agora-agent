# Rendered React content model

Maintained article inputs live in `maintained/__nift`: precompiled React ESM
modules, their source-path manifest, runtime bridges, and an explicit content
catalog. Routine publication does not invoke an MDX renderer/compiler.

The catalog retains frontmatter, TOC, structured data, processed Markdown
(`_markdown`) and raw search text (`_raw`). These are maintained projections,
not an instruction to compile the raw text back into an article. The React
module is the maintained article implementation. Navigation metadata and
OpenAPI sources remain structured sources under `app/content`.

For an article edit, update its React ESM and any affected catalog projections
together. For a route addition/removal, coordinate manifest/catalog keys and
navigation metadata. Preserve platform panel and heading/anchor relationships.
This coordination is the rendered model's maintenance tradeoff: authored
`agora` derives these projections from one MDX source instead.

`tools/publish-maintained-content.ts` publishes modules with an identity derived
from both ESM and catalog bytes. Consequently, a projection-only edit also
invalidates payload/render caches, and module edits cannot reuse stale browser
cache identities. Runtime bridges reuse the application bundle's React and
component implementations.

`tools/prepare-agent.ts` independently prepares this source model, generates
payload/search/Markdown/LLM outputs through the upstream semantic helpers,
builds the reusable TanStack application when its source changes, renders route
documents and registers Nift composition inputs. Supported body edits use the
same guarded incremental payload adapter; unsupported structural changes fall
back to full payload derivation. That fallback processes the catalog and
OpenAPI data, and does not compile MDX.

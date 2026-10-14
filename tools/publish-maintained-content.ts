/** Publish maintained React ESM/catalog inputs; no Markdown conversion occurs. */
import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, join, basename } from 'node:path';
const project = resolve(import.meta.dir, '..');
const maintained = join(project, 'maintained/__nift');
const output = join(project, 'app/public/__nift');
const metadata = JSON.parse(await readFile(join(maintained, 'content-metadata.json'), 'utf8'));
const inputManifest = JSON.parse(await readFile(join(maintained, 'content-manifest.json'), 'utf8'));
const manifest: Record<string, string> = {};
await mkdir(join(output, 'content'), { recursive: true });
async function changed(path: string, bytes: string | Uint8Array) {
  const expected = Buffer.from(bytes);
  if (await readFile(path).then(old => old.equals(expected)).catch(() => false)) return;
  await writeFile(path, expected);
}
for (const [path, moduleUrl] of Object.entries(inputManifest) as [string, string][]) {
  if (!moduleUrl.startsWith('/__nift/content/') || moduleUrl.includes('..') || moduleUrl.includes('\\')) throw new Error(`Invalid maintained module path: ${moduleUrl}`);
  const entry = metadata[path];
  if (!entry || typeof entry._raw !== 'string' || typeof entry._markdown !== 'string') throw new Error(`Missing maintained text projections: ${path}`);
  const bytes = await readFile(join(maintained, 'content', basename(moduleUrl)));
  // Metadata changes also change identity: payload/SSR caches must observe
  // projection edits even if the article's ESM bytes were not changed.
  const hash = createHash('sha256').update(bytes).update(JSON.stringify(entry)).digest('hex');
  manifest[path] = `/__nift/content/${hash}.mjs`;
  await changed(join(output, 'content', `${hash}.mjs`), bytes);
}
if (Object.keys(metadata).some(path => !Object.hasOwn(inputManifest, path))) throw new Error('Catalog entry without maintained module');
for (const name of await readdir(maintained)) {
  if (/^runtime-[^/]+\.mjs$/.test(name)) await changed(join(output, name), await readFile(join(maintained, name)));
}
await changed(join(output, 'content-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
await changed(join(output, 'content-metadata.json'), JSON.stringify(metadata, null, 2) + '\n');
const reachable = new Set(Object.values(manifest).map(url => basename(url)));
for (const file of await readdir(join(output, 'content'))) if (!reachable.has(file)) await rm(join(output, 'content', file));
console.log(`[maintained-content] ${Object.keys(manifest).length} React ESM articles and explicit projections; no Markdown renderer`);

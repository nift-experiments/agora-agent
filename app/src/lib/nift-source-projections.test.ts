// @vitest-environment node
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { docs } from './nift-source.server';

describe('maintained projections through the compact metadata adapter', () => {
  it('preserves real English, Chinese and platform-bearing article text', async () => {
    const root = process.env.NIFT_CONTENT_ROOT ?? resolve(process.cwd(), 'public');
    const catalog = JSON.parse(await readFile(resolve(root, '__nift/content-metadata.json'), 'utf8'));
    const heads = JSON.parse(await readFile(resolve(root, '__nift/content-heads.json'), 'utf8'));
    expect(Object.keys(heads)).toHaveLength(1657);
    const keys = [
      'en/introduction/about-agora.mdx',
      'zh-CN/introduction/about-agora.mdx',
      'en/realtime-media/rtc/voice-quickstart.mdx',
    ];
    for (const key of keys) {
      const page = docs.docs.find(item => item.info.path === key);
      expect(page, key).toBeDefined();
      expect(heads[key]._raw).toBeUndefined();
      expect(await page!.getText('raw')).toBe(catalog[key]._raw);
      expect(await page!.getText('processed')).toBe(catalog[key]._markdown);
    }
  });
});

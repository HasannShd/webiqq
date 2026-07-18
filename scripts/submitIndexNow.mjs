import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const host = 'www.webiqq.com';
const key = '5e3a5b5354f2a810c8bb303e70c0df5c';
const keyLocation = `https://${host}/${key}.txt`;
const sitemap = await readFile(resolve(import.meta.dirname, '../public/sitemap.xml'), 'utf8');
const urlList = [...sitemap.matchAll(/<loc>(https:\/\/www\.webiqq\.com\/[^<]*)<\/loc>/g)].map((match) => match[1]);

if (!urlList.length) {
  throw new Error('No WebiQQ URLs found in public/sitemap.xml');
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});

if (!response.ok) {
  throw new Error(`IndexNow submission failed with HTTP ${response.status}: ${await response.text()}`);
}

console.log(`Submitted ${urlList.length} WebiQQ URLs to IndexNow (HTTP ${response.status}).`);

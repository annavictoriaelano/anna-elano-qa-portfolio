import { chromium } from '@playwright/test';
import { mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const BASE_URL = process.env.SCREENSHOT_URL ?? 'http://localhost:8080';
const OUT_DIR = resolve('screenshots');

const routes = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/projects' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
];

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

async function waitForServer(url, attempts = 30, delayMs = 1000) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // server not up yet
    }
    await new Promise((r) => setTimeout(r, delayMs));
  }
  throw new Error(`Server at ${url} never responded after ${attempts}s`);
}

async function main() {
  console.log(`Waiting for ${BASE_URL}...`);
  await waitForServer(BASE_URL);

  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 2,
      });
      const page = await context.newPage();
      for (const route of routes) {
        const url = BASE_URL + route.path;
        await page.goto(url, { waitUntil: 'networkidle' });
        const file = `${OUT_DIR}/${route.name}-${viewport.name}.png`;
        await page.screenshot({ path: file, fullPage: true });
        console.log(`OK ${route.name} @ ${viewport.name} -> ${file}`);
      }
      await context.close();
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

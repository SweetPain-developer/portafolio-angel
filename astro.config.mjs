import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL ?? 'https://portafolio-angel.pages.dev';

export default defineConfig({
  ...(site ? { site } : {}),
  output: 'static'
});

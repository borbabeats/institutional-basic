// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react()],
  output: 'static',
  adapter: vercel()
});
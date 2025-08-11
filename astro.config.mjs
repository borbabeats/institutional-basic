// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
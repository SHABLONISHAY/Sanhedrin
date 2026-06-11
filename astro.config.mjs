// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://SHABLONISHAY.github.io',
  base: '/Sanhedrin',
  vite: {
    plugins: [tailwindcss()]
  }
});
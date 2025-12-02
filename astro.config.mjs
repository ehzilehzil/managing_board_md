// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';



// https://astro.build/config
const isDev = process.env.NODE_ENV === 'development';
export default defineConfig({
  base: isDev ? '/' : '/managing_board',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [alpinejs()]
});
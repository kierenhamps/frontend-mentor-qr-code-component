// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [
  ],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
});

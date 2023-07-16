// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [
  ],
  base: '/frontend-mentor-qr-code-component/',
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
});

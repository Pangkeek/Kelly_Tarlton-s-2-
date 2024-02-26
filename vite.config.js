import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    base: '/Kelly_Tarlton-s-2-/',
    assetsInlineLimit: 0,
  },
  assetsDir: './assets/media',
});

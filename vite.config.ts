import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/panda-kuk/', // WAJIB untuk GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

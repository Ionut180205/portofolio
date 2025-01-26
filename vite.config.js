import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portofolio/', // Base URL for deployment, update if deploying to a subpath
  build: {
    outDir: 'dist', // Customize this if you want a different output directory
  },
  preview: {
    // This will make sure the preview server uses the correct base path
    base: '/portofolio/',
  }
});

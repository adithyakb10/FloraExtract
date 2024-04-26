import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // Add this line to handle JPG files
  build: {
    chunkSizeWarningLimit: 2000,
  },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true, // Runs `tsc --noEmit` in the background
      overlay: true,    // Shows errors as a full-screen overlay in the browser
    }),
  ],
})

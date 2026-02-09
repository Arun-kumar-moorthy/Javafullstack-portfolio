import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Javafullstack-portfolio/",   // ✅ THIS IS THE KEY FIX
  plugins: [react()],
  build: {
    outDir: 'docs',                   // keep this — good choice 👍
  },
})

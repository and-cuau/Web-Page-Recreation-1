import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Web-Page-Recreation-1/', // ✅ This is critical for GitHub Pages
  plugins: [react()],
})

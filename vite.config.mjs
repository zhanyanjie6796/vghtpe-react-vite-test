import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/vghtpe-react-vite-test/',  // ⚠️ 若是 repo subpath 必須這樣
  build: {
    outDir: 'dist'
  }
})

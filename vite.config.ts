import {fileURLToPath} from 'url'
import {dirname, resolve} from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/iesposteri/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
})

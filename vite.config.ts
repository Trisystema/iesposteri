import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import alias from '@rollup/plugin-alias'

const projectRootDir = resolve(__dirname)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), alias()],
  base: "/iesposteri/",
  resolve: {
    alias:
      { '@': resolve(projectRootDir, "src") },
  },
})

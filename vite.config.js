import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Leave as '/' if this repo is named <your-username>.github.io.
  // If it's deployed as a project page instead (github.com/you/some-repo),
  // set this to '/some-repo/' so built asset paths resolve correctly.
  base: process.env.VITE_BASE_PATH || '/',
})

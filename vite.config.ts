import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '.',
        '/Users/mac/.gemini/antigravity-ide/brain/64a32597-4959-4178-95b6-ab6c87ed2a61'
      ]
    }
  }
})

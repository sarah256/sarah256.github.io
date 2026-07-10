import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

const mimeTypes: Record<string, string> = {
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
}

function legacyAssetsPlugin(): Plugin {
  return {
    name: 'legacy-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0]
        if (!url?.startsWith('/img/') && !url?.startsWith('/img2/')) {
          next()
          return
        }

        const filePath = path.join(rootDir, decodeURI(url))
        if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
          next()
          return
        }

        const ext = path.extname(filePath).toLowerCase()
        res.setHeader('Content-Type', mimeTypes[ext] ?? 'application/octet-stream')
        fs.createReadStream(filePath).pipe(res)
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), legacyAssetsPlugin()],
  base: '/',
})

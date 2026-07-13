import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const rootDir = fileURLToPath(new URL('..', import.meta.url))
const dataFile = path.join(rootDir, 'src/data/designWorks.ts')
const MAX_WIDTH = 1100

function extractSrcs(source) {
  return [...source.matchAll(/"src":\s*"([^"]+)"/g)].map((match) => match[1])
}

function optimizeOne(srcPath) {
  if (srcPath.endsWith('.svg')) return null

  const relative = srcPath.replace(/^\//, '')
  const inputPath = path.join(rootDir, relative)
  if (!fs.existsSync(inputPath)) {
    console.warn(`Missing: ${inputPath}`)
    return null
  }

  const parsed = path.parse(relative)
  const outRelative = path.join('gallery', parsed.dir, `${parsed.name}${parsed.ext.toLowerCase()}`)
  const outputPath = path.join(rootDir, 'public', outRelative)
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })

  const copy = spawnSync('sips', ['-Z', String(MAX_WIDTH), inputPath, '--out', outputPath], {
    encoding: 'utf8',
  })
  if (copy.status !== 0) {
    console.warn(`Failed: ${srcPath}`, copy.stderr)
    return null
  }

  // Recompress JPEGs a bit more aggressively when possible
  if (/\.jpe?g$/i.test(parsed.ext)) {
    spawnSync('sips', ['-s', 'formatOptions', '70', outputPath], { encoding: 'utf8' })
  }

  const before = fs.statSync(inputPath).size
  const after = fs.statSync(outputPath).size
  console.log(
    `${srcPath} → /${outRelative.replaceAll(path.sep, '/')} (${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024).toFixed(0)}KB)`,
  )
  return `/${outRelative.replaceAll(path.sep, '/')}`
}

const source = fs.readFileSync(dataFile, 'utf8')
const replacements = new Map()

for (const src of extractSrcs(source)) {
  const optimized = optimizeOne(src)
  if (optimized) replacements.set(src, optimized)
}

let next = source
for (const [from, to] of replacements) {
  next = next.replaceAll(`"src": "${from}"`, `"src": "${to}"`)
}
fs.writeFileSync(dataFile, next)
console.log(`\nUpdated ${replacements.size} paths in designWorks.ts`)

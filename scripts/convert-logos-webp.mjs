/**
 * Convierte todos los logos de clients/ a WebP.
 * Corre una sola vez: node scripts/convert-logos-webp.mjs
 */
import sharp from 'sharp'
import { readdirSync, mkdirSync } from 'fs'
import { join, extname, basename } from 'path'

const INPUT_DIR = 'public/images/clients'
const OUTPUT_DIR = 'public/images/clients/webp'
const QUALITY = 80

mkdirSync(OUTPUT_DIR, { recursive: true })

const files = readdirSync(INPUT_DIR).filter(f =>
  ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase())
)

console.log(`\nConvirtiendo ${files.length} logos a WebP (quality: ${QUALITY})...\n`)

let totalBefore = 0
let totalAfter = 0

for (const file of files) {
  const inputPath = join(INPUT_DIR, file)
  const outputName = basename(file, extname(file)) + '.webp'
  const outputPath = join(OUTPUT_DIR, outputName)

  const meta = await sharp(inputPath).metadata()
  const inputSize = (await sharp(inputPath).toBuffer()).length

  await sharp(inputPath)
    .webp({ quality: QUALITY })
    .toFile(outputPath)

  const outputSize = (await sharp(outputPath).toBuffer()).length
  const saving = (((inputSize - outputSize) / inputSize) * 100).toFixed(0)

  totalBefore += inputSize
  totalAfter += outputSize

  const kb = n => (n / 1024).toFixed(0) + 'KB'
  const mb = n => (n / 1024 / 1024).toFixed(2) + 'MB'
  const size = inputSize > 500_000 ? mb : kb

  console.log(`  ${file.padEnd(40)} ${size(inputSize)} → ${size(outputSize)}  (-${saving}%)`)
}

const totalSaving = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)
console.log(`\n  Total: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB  (-${totalSaving}%)`)
console.log('\n  Listo. Actualizá clients.ts con las nuevas rutas /images/clients/webp/*.webp\n')

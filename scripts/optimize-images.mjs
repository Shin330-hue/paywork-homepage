import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join } from 'path';

const INPUT_DIR = './public/images';
const OUTPUT_DIR = './public/images/optimized';

const CONFIG = {
  'og-image.png': { width: 1200, height: 630, quality: 80 },
  'hero-bg.png': { width: 1920, height: 1080, quality: 75 },
  'avatar.png': { width: 400, height: 400, quality: 85 },
  'icon-game.png': { width: 200, height: 200, quality: 85 },
  'icon-ai.png': { width: 200, height: 200, quality: 85 },
  'icon-cooking.png': { width: 200, height: 200, quality: 85 },
  'icon-hunting.png': { width: 200, height: 200, quality: 85 },
  'icon-volunteer.png': { width: 200, height: 200, quality: 85 },
  'icon-misc.png': { width: 200, height: 200, quality: 85 },
  'favicon.png': { width: 512, height: 512, quality: 85 },
  'donation-bg.png': { width: 1920, height: 600, quality: 75 },
};

async function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function optimizeImages() {
  try {
    await mkdir(OUTPUT_DIR, { recursive: true });
  } catch (e) {}

  const files = await readdir(INPUT_DIR);
  const pngFiles = files.filter(f => f.endsWith('.png') && CONFIG[f]);

  console.log(`\n📦 Optimizing ${pngFiles.length} images...\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of pngFiles) {
    const inputPath = join(INPUT_DIR, file);
    const outputPath = join(OUTPUT_DIR, file);
    const config = CONFIG[file];

    const originalStat = await stat(inputPath);
    totalOriginal += originalStat.size;

    await sharp(inputPath)
      .resize(config.width, config.height, { fit: 'cover' })
      .png({ quality: config.quality, compressionLevel: 9 })
      .toFile(outputPath);

    const optimizedStat = await stat(outputPath);
    totalOptimized += optimizedStat.size;

    const reduction = ((1 - optimizedStat.size / originalStat.size) * 100).toFixed(1);
    console.log(`✅ ${file}`);
    console.log(`   ${await formatBytes(originalStat.size)} → ${await formatBytes(optimizedStat.size)} (-${reduction}%)\n`);
  }

  console.log('━'.repeat(50));
  console.log(`📊 Total: ${await formatBytes(totalOriginal)} → ${await formatBytes(totalOptimized)}`);
  console.log(`🎉 Saved: ${await formatBytes(totalOriginal - totalOptimized)} (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%)`);
  console.log(`\n📁 Optimized images saved to: ${OUTPUT_DIR}`);
}

optimizeImages().catch(console.error);

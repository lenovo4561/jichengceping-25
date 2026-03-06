/**
 * 压缩 logo.png 至 192x192
 * 使用 jijutuku-23 的 sharp 模块
 */
const sharp = require('../jijutuku-23/node_modules/sharp')
const path = require('path')
const fs = require('fs')

const inputPath = path.join(__dirname, 'src', 'assets', 'images', 'logo.png')
const backupPath = path.join(
  __dirname,
  'src',
  'assets',
  'images',
  'logo-original.png'
)

async function compressLogo() {
  try {
    // 备份原始文件
    if (fs.existsSync(inputPath)) {
      fs.copyFileSync(inputPath, backupPath)
      console.log('✓ 原始 logo 已备份为 logo-original.png')
    }

    const originalStats = fs.statSync(inputPath)
    console.log(`原始文件大小: ${(originalStats.size / 1024).toFixed(2)} KB`)

    // 压缩并调整大小为 192x192，直接覆盖原文件
    await sharp(inputPath)
      .resize(192, 192, {
        fit: 'cover',
        position: 'center'
      })
      .png({ quality: 90, compressionLevel: 9 })
      .toBuffer()
      .then(buf => {
        fs.writeFileSync(inputPath, buf)
        console.log('✓ Logo 已压缩调整为 192x192 并覆盖原文件')
        const compressedStats = fs.statSync(inputPath)
        console.log(
          `压缩后大小: ${(compressedStats.size / 1024).toFixed(2)} KB`
        )
        console.log(
          `压缩率: ${(
            (1 - compressedStats.size / originalStats.size) *
            100
          ).toFixed(2)}%`
        )
      })
  } catch (err) {
    console.error('压缩失败:', err)
    process.exit(1)
  }
}

compressLogo()

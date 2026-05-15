#!/usr/bin/env node
"use strict";

// One-time image optimization for web delivery.
// JPEGs: resize to max 1920px on the long edge, quality 82.
// logo-mark.png: resize to 300px wide (used at 44–56px in UI, 300 covers 3× retina).

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const dir = path.join(__dirname, "../src/assets/images");

const JPEG_MAX = 1920;
const JPEG_Q  = 82;
const PNG_MAX  = 300;

async function optimise(file) {
  const fp = path.join(dir, file);
  const tmp = fp + ".tmp";
  const meta = await sharp(fp).metadata();
  const before = fs.statSync(fp).size;

  let pipeline = sharp(fp);

  if (file.endsWith(".png")) {
    pipeline = pipeline
      .resize({ width: PNG_MAX, withoutEnlargement: true })
      .png({ compressionLevel: 9 });
  } else {
    const needsResize = meta.width > JPEG_MAX || meta.height > JPEG_MAX;
    if (needsResize) {
      pipeline = pipeline.resize({
        width: JPEG_MAX, height: JPEG_MAX,
        fit: "inside", withoutEnlargement: true,
      });
    }
    pipeline = pipeline.jpeg({ quality: JPEG_Q, mozjpeg: true });
  }

  await pipeline.toFile(tmp);
  const after = fs.statSync(tmp).size;
  fs.renameSync(tmp, fp);

  const saved = Math.round((before - after) / 1024);
  const pct   = Math.round((1 - after / before) * 100);
  console.log(
    `${file}: ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB  (−${saved}KB, ${pct}%)`
  );
}

(async () => {
  const files = fs.readdirSync(dir).filter(f => /\.(jpe?g|png)$/i.test(f));
  for (const f of files) await optimise(f);
  console.log("\nDone.");
})();

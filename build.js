import esbuild from 'esbuild';
import { cpSync, rmSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const watch = process.argv.includes('--watch');

// ── Clean dist/ (keep directory) ─────────────────────────────────────────────

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });

// ── Bundle JS ────────────────────────────────────────────────────────────────

const ctx = await esbuild.context({
  entryPoints: ['src/tesla-card.js'],
  bundle: true,
  outfile: 'dist/tesla-card.js',
  format: 'esm',
  target: 'es2020',
  minify: !watch,
  sourcemap: watch ? 'inline' : false,
  logLevel: 'info',
});

if (watch) {
  await ctx.watch();
  console.log('Watching for changes...');
} else {
  await ctx.rebuild();
  await ctx.dispose();

  // ── Copy images into dist/ for HACS delivery ────────────────────────────────
  // HACS downloads everything in dist/ — so images ship alongside the JS file.
  // Only copy new-format variant images (e.g. 3/3.1/neutral/base.png),
  // excluding _previews/, RAW/, .old files, and .DS_Store.

  const MODELS_SRC = 'images/models';
  const BUTTONS_SRC = 'images/buttons';

  // Model images: only variant-based directories (e.g. 3/3.1/, Y/Y.1/, S/S.1/)
  function copyModelImages(srcDir, destDir) {
    for (const model of readdirSync(srcDir)) {
      const modelPath = join(srcDir, model);
      if (!statSync(modelPath).isDirectory()) continue;

      for (const variant of readdirSync(modelPath)) {
        const variantPath = join(modelPath, variant);
        if (!statSync(variantPath).isDirectory()) continue;
        // Only copy variant dirs (contain a dot, e.g. "3.1", "Y.1", "S.1")
        if (!variant.includes('.')) continue;

        for (const colour of readdirSync(variantPath)) {
          const colourPath = join(variantPath, colour);
          if (!statSync(colourPath).isDirectory()) continue;
          if (colour === '_previews' || colour === 'RAW') continue;

          const destColour = join(destDir, model, variant, colour);
          mkdirSync(destColour, { recursive: true });

          for (const file of readdirSync(colourPath)) {
            if (file.startsWith('.')) continue;
            if (file.includes('.old.')) continue;
            if (file === '_previews' || file === 'RAW') continue;
            const filePath = join(colourPath, file);
            if (statSync(filePath).isDirectory()) continue;
            cpSync(filePath, join(destColour, file));
          }
        }
      }
    }
  }

  copyModelImages(MODELS_SRC, 'dist');

  // Button SVGs only (not legacy JPGs)
  mkdirSync('dist/buttons', { recursive: true });
  for (const file of readdirSync(BUTTONS_SRC)) {
    if (extname(file).toLowerCase() === '.svg') {
      cpSync(join(BUTTONS_SRC, file), join('dist/buttons', file));
    }
  }

  // Summary
  let imgCount = 0;
  function countFiles(dir) {
    for (const f of readdirSync(dir)) {
      const p = join(dir, f);
      if (statSync(p).isDirectory()) countFiles(p);
      else if (f !== 'tesla-card.js') imgCount++;
    }
  }
  countFiles('dist');
  console.log(`Copied ${imgCount} image assets into dist/`);
  console.log('Build complete → dist/');
}

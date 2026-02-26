import esbuild from 'esbuild';

const watch = process.argv.includes('--watch');

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
  console.log('Build complete → dist/tesla-card.js');
}

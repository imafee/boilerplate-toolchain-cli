const { banner, footer } = require('./brand.cjs');

module.exports = {
  input: 'index.js',
  output: {
    file: 'dist/bundle.esm.js',
    format: 'es',
    sourcemap: true,
    banner: banner,
    footer: footer,
  },
  plugins: [],
  cache: true,
  maxParallelFileOps: 30,
};

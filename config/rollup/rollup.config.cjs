const { banner, footer } = require('./brand.cjs');

module.exports = {
  input: 'index.js',
  output: {
    file: 'dist/bundle.cjs.js',
    format: 'cjs',
    sourcemap: true,
    banner: banner,
    footer: footer,
  },
  plugins: [],
  cache: true,
  maxParallelFileOps: 30,
};

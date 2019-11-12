const pkg = require('./package.json')

module.exports = {
  name: pkg.name, // if not set, will guess from ${package.json}.name
  banner: '', // if not set, return ''
  compilerOptions: [{
    format: 'esm',
    extName: '.mjs',
    target: 'esnext'
  },
  {
    format: 'cjs',
    extName: '.js',
    target: 'es5'
  },
  {
    format: 'umd',
    extName: '.min.js',
    target: 'es5'
  }]
}

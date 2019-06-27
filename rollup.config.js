import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

module.exports = [{
  input: 'lib/index.js',
  output: {
    file: 'dist/bundle.umd.js',
    format: 'umd',
    name: 'brief-cases',
  },
  plugins: [
    babel({
      envName: 'prod',
      configFile: './babel.config.js',
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
}, {
  input: 'lib/index.js',
  output: {
    file: 'dist/bundle.cjs.js',
    format: 'cjs',
  },
}];

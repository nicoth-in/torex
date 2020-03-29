
/*
  Plugin can minify es6
 */
import { terser } from "rollup-plugin-terser";

/*
  Plugin shows build progress
 */
import progress from 'rollup-plugin-progress';

/*
  Plugins to handle packages
 */
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

/*
  Babel transforms es6 to es5
 */
import babel from 'rollup-plugin-babel';

/*
  Build configuration
 */
export default {
  input: 'src/torex.js',
  output: [
  {
    file: 'dist/torex.dist.js',
    format: 'iife',
    name: 'Torex',
    globals: {}
  },
  {
    file: 'dist/torex.dist.min.js',
    format: 'iife',
    name: 'Torex',
    plugins: [
      // Minify
      terser(),
    ],
    globals: {}
  }
  ],
  plugins: [
    // Handle packages
    commonJS({
      include: 'node_modules/**'
    }),
    resolve(),
    // Show progress
    progress(),
    // Transform es6 to es5
    babel({
      exclude: 'node_modules/**',
    })
  ],
  external: [],
}

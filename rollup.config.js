import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const extensions = ['.js', '.ts'];

const config = {
  input: './src/index.ts',
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    typescript({
      exclude: ['**/*.test.ts'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      extensions,
      include: ['src/**/*'],
      babelHelpers: 'runtime',
    }),
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
};

export default config;

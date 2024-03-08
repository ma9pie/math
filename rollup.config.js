import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const extensions = ['.js', '.ts'];

const config = {
  input: './src/index.ts',
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
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
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
};

export default config;

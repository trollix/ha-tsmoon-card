import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import cssImports from 'rollup-plugin-import-css';
import template from 'rollup-plugin-html-literals';
import { terser } from '@rollup/plugin-terser';
import image from '@rollup/plugin-image'
import versionInjector from 'rollup-plugin-version-injector';
import json from '@rollup/plugin-json';
import pkg from './package.json';

let targetFileName = pkg.main;

const plugins = [
  cssImports({minify:true}),
  resolve(),
  json(),
  image(),
  versionInjector({
    injectInComments: false,
    logLevel: 'warn',
  }),
];

plugins.push(typescript());

let sourcemapPathTransform = undefined;

if (process.env.release) {
  plugins.push(template())
  plugins.push(
    terser({
      compress: {}
    })
  );

  let repoRoot = pkg.repository.url
    .replace("https://github.com", "https://raw.githubusercontent.com")
    .replace(/.git$/, "");
  repoRoot += "/";

}

export default {
  external: ['suncalc'],
  input: 'src/index.ts',
  output: {
    globals: {
      suncalc: 'suncalc',
    },
    file: targetFileName,
    format: 'iife',
  },
  plugins: plugins,
}
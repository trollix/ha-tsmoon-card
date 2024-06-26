import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import cssImports from 'rollup-plugin-import-css';
//import template from 'rollup-plugin-html-literals';
import { terser } from '@rollup/plugin-terser';
import image from '@rollup/plugin-image'
import versionInjector from 'rollup-plugin-version-injector';
import json from '@rollup/plugin-json';
import pkg from './package.json';
import replace from '@rollup/plugin-replace';

let targetFileName = pkg.main;

const plugins = [
  cssImports({minify:true}),
  resolve(),
  json(),
  image(),
  typescript(),
  commonjs(),
  versionInjector({
    injectInComments: false,
    logLevel: 'warn',
  }),
  replace({
    'typeof window': JSON.stringify('object'), // Replace 'typeof window' with a string
    preventAssignment: true,
  }), 
];


if (process.env.release) {
  //plugins.push(template())
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
  external: [],
  input: 'src/index.ts',
  output: {
    globals: {
    },
    file: targetFileName,
    format: 'iife',
    name: 'TSMoonCard'
  },
  context: 'this',
  plugins: plugins,

}
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import cssImports from 'rollup-plugin-import-css';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';
import versionInjector from 'rollup-plugin-version-injector';
import pkg from './package.json';

let targetFileName = pkg.main;

const plugins = [
  cssImports({minify:true}),
  resolve(),
  versionInjector({
    injectInComments: false,
    logLevel: 'warn',
  }),
];

plugins.push(typescript());

let sourcemapPathTransform = undefined;

if (process.env.release) {
  plugins.push(minifyHTML())
  plugins.push(
    terser({
      compress: {}
    })
  );

  let repoRoot = pkg.repository.url
    .replace("https://github.com", "https://raw.githubusercontent.com")
    .replace(/.git$/, "");
  repoRoot += "/";

  sourcemapPathTransform = file => repoRoot + "v" + pkg.version + file.substr(2);
}

export default {
  external: [],
  input: 'src/index.ts',
  output: {
    globals: {},
    file: targetFileName,
    format: 'iife',
    sourcemap: true,
    sourcemapExcludeSources: true,
    sourcemapPathTransform: sourcemapPathTransform
  },
  plugins: plugins,
}
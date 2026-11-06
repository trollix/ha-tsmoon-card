import { transform } from 'esbuild';
import { readFileSync } from 'node:fs';
import { resolve as resolvePath } from 'node:path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import cssImports from 'rollup-plugin-import-css';
//import template from 'rollup-plugin-html-literals';
import terser from '@rollup/plugin-terser';
import image from '@rollup/plugin-image'
import versionInjector from 'rollup-plugin-version-injector';
import json from '@rollup/plugin-json';
import pkg from './package.json';
import replace from '@rollup/plugin-replace';

let targetFileName = pkg.main;

// Read once per transformation so watch mode uses the current compiler settings.
function transpileTypeScript() {
  return {
    name: 'transpile-typescript',
    async transform(code, id) {
      if (!/\.tsx?$/.test(id) || /\.d\.ts$/.test(id)) return null;
      const configPath = resolvePath('tsconfig.json');
      this.addWatchFile(configPath);
      const result = await transform(code, {
        loader: id.endsWith('.tsx') ? 'tsx' : 'ts',
        sourcefile: id,
        target: 'es2020',
        format: 'esm',
        sourcemap: true,
        tsconfigRaw: readFileSync(configPath, 'utf8'),
        legalComments: 'none',
      });
      for (const warning of result.warnings) this.warn(warning.text);
      return { code: result.code, map: result.map };
    },
  };
}

const plugins = [
  cssImports({minify:true}),
  resolve({ extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.tsx'] }),
  json(),
  image(),
  transpileTypeScript(),
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

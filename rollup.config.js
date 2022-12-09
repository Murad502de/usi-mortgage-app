import babel from '@rollup/plugin-babel'
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss'
import prettier from "rollup-plugin-prettier";

import typescript from '@rollup/plugin-typescript';
// import uglify from '@lopatnov/rollup-plugin-uglify';
import copy from 'rollup-plugin-copy2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import styles from "rollup-plugin-styles";
import jsonlint from 'rollup-plugin-jsonlint';
import replace from '@rollup/plugin-replace';
import { version, main, vendor, widgetName } from './package.json';
import zip from 'rollup-plugin-zip';
import vue from 'rollup-plugin-vue';
import vuePugPlugin from 'vue-pug-plugin';
import bundleScss from 'rollup-plugin-bundle-scss';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';

import commonjs from '@rollup/plugin-commonjs';

const production = !process.env.ROLLUP_WATCH;

const babelOptions = {
  babelHelpers: 'bundled'
}

const vuePluginConfig = {
  preprocessStyles: true,
  template: {
    isProduction: true,
    compilerOptions: {
      whitespace: 'condense'
    },
    preprocessOptions: {
      plugins: [
        vuePugPlugin
      ]
    },
  }
}

export default {
  input: `src/script.ts`,
  output: {
    dir: 'dist',
    format: 'amd',
    name: 'widget',
    sourcemap: true,
    globals: {
      axios: 'axios',
    },
  },

  watch: {
    include: ['src/**/*.json', 'src/**/*.ts', 'src/**/*.scss']
  },
  sourceMap: "inline",

  plugins: [
    alias({
      entries: [
        { find: '@components', replacement: './src/app/components' },
      ]
    }),

    replace({
      __WIDGET__: `${vendor}_${widgetName}`,
      __VERSION__: version,
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.VUE_APP_MOUNT_POINT': JSON.stringify('usi-mortgage-app'),
      'process.env.VUE_APP_API_GATEWAY_DEFAULT_URL': JSON.stringify('http://localhost:8090/api/v1'),
    }),
    jsonlint({
      mode: 'json',
      include: ["src/**/*.json"]
    }),

    vue(vuePluginConfig),
    bundleScss(),

    styles({
      mode: [
        "inject",
        { container: "body", singleTag: true, prepend: true, attributes: { id: "global" } },
      ],
    }),

    nodeResolve({
      extensions: ['.scss', '.vue', '.ts']
    }),

    commonjs(),

    copy({
      assets: [
        ['src/manifest.json', 'manifest.json'],
        ['src/i18n/ru.json', 'i18n/ru.json'],
        ['src/i18n/en.json', 'i18n/en.json'],
        ['src/images/logo.png', 'images/logo.png'],
        ['src/images/logo_dp.png', 'mages/logo_dp.png'],
        ['src/images/logo_main.png', 'images/logo_main.png'],
        ['src/images/logo_medium.png', 'images/logo_medium.png'],
        ['src/images/logo_min.png', 'images/logo_min.png'],
        ['src/images/logo_small.png', 'images/logo_small.png']
      ]
    }),

    typescript({ module: "es2020", lib: ['dom', 'es2015'] }),

    // babel(babelOptions),

    terser(),

    zip({
      file: 'widget.zip'
    }),
  ],
  external: [
    'underscore',
    'Modal',
    'jquery',
    'moment'
  ],
  paths: {
    "underscore": 'underscore',
    "jquery": 'jquery',
    "Modal": 'lib/components/base/modal',
    "moment": 'moment'
  }
};

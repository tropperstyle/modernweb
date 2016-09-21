import babel from 'rollup-plugin-babel';

export default {
  entry: 'js/index.js',
  plugins: [ babel() ],
  format: 'iife'
};

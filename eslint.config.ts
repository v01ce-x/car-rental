import {eslint} from '@siberiacancode/eslint';

export default eslint({
  typescript: true,
  vue: true,
  ignores: [
    'dist',
    'node_modules',
    'coverage',
  ],
});
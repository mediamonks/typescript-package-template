/* eslint-disable unicorn/filename-case */
export default {
  // uses functions, so it runs on all files
  '**/*.{ts?(x),js?(x)}': () => ['npm run lint'],
  '**/*.ts?(x)': () => ['npm run typecheck'],
  // no function, so runs only on changed files
  '**/*.{mjs,cjs,js,jsx,ts,tsx,json,md,mdx,css,scss,html}': 'npm run format',
};

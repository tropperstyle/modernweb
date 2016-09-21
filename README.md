# modernweb

**BOILERPLATE FOR ES2015 CSS3**

Uses babel/rollup to transpile and bundle javascript
Users postcss/autoprefixer to modernize and bundle css

- `start` -> Runs `watch:js`, `watch:css` and `serve` in parallell
- `preserve` -> Runs before `serve` and makes sure that `build:js` and `build:css` have been executed
- `serve` -> Starts browser-sync, serves files from public and dist and restarts when files in dist are changed
- `watch:js` -> Watches js-files and runs `build:js` when there are changes
- `watch:css` -> Watches css-files and runs `build:css` when there are changes
- `build:js` -> Bundles es6-modules with rollup, transpiles with babel, and saves the result in "dist"
- `build:css` -> Builds css with postcss and saves the result in "dist"

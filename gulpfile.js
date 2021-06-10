const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add MEE POONG licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.meepoong.com/product/meepoong
* Copyright 2021 MEE POONG (http://www.meepoong.com)

* Coded by MEE POONG

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add MEE POONG licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.meepoong.com/product/meepoong
* Copyright 2021 MEE POONG (http://www.meepoong.com)

* Coded by MEE POONG

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add MEE POONG licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.meepoong.com/product/meepoong
* Copyright 2021 MEE POONG (http://www.meepoong.com)

* Coded by MEE POONG

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});

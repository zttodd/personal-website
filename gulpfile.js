const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");

function copyFavicon() {
  return src("./favicon.ico")
    .pipe(dest("./_site"));
}

function compileCSS() {
  return src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./css"));
}

function watchSass(callback) {
  watch("sass/**/*.scss", series(compileCSS));
  callback();
}

exports.default = series(copyFavicon, compileCSS, watchSass);

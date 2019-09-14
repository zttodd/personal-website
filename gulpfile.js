const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");

function compileCSS() {
  return src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./css"));
}

function watchSass(callback) {
  watch("sass/**/*.scss", series(compileCSS));
  callback();
}

exports.default = series(compileCSS, watchSass);

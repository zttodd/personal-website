const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');

// Set compiler to Dart Sass
sass.compiler = require('sass');

// Build Sass into CSS
function compileSass() {
  return src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./_site/css'));
}

// Watch Sass files for changes
function watchSass() {
  watch('./sass/**/*.scss', compileSass);
}

// Copy favicons into _site
function copyFavicons() {
  return src('./images/favicons/*')
    .pipe(dest('./_site'));
}

exports.favicons = copyFavicons;
exports.default = series(copyFavicons, compileSass, watchSass);
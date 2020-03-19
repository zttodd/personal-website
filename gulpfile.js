const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');

// Set compiler to Dart Sass
sass.compiler = require('sass');

// Build Sass into CSS
function compileSass() {
  return src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./_site/css'));
}

// Watch Sass files for changes
function watchSass() {
  watch('./src/sass/**/*.scss', compileSass);
}

exports.default = series(compileSass, watchSass);
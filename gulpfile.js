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

// Copy images from posts into _site
function copyPostImages() {
  return src('./images/posts/**/*')
    .pipe(dest('./_site/images/posts'));
}

// Build only
exports.build = series(copyFavicons, copyPostImages, compileSass);

// Build and watch files
exports.default = series(copyFavicons, copyPostImages, compileSass, watchSass);
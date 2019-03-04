const { dest } = require("gulp");
const babelify = require("babelify");
const browserify = require("browserify");
const buffer = require("vinyl-buffer");
const log = require("gulplog");
const source = require("vinyl-source-stream");
const uglify = require("gulp-uglify");

function scripts() {
  var b = browserify({
    entries: "./src/js/index.js",
    debug: true,
    transform: [
      babelify.configure({
        presets: ["@babel/preset-env"]
      })
    ]
  });

  return (
    b
      .bundle()
      .pipe(source("site.js"))
      .pipe(buffer())
      // Add other gulp transformations (eg. uglify) to the pipeline here.
      .pipe(dest("./build/js/"))
      .pipe(uglify())
      .on("error", log.error)
      .pipe(dest("./dist/js/"))
  );
}

module.exports = scripts;

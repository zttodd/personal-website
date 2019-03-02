"use strict";

const { src, dest, series, watch } = require("gulp");
const babelify = require("babelify");
const browserify = require("browserify");
const buffer = require("vinyl-buffer");
const data = require("gulp-data");
const fs = require("fs");
const inlinesource = require("gulp-inline-source");
const log = require("gulplog");
const rimraf = require("rimraf");
const sass = require("gulp-sass");
const server = require("browser-sync").create();
const source = require("vinyl-source-stream");
const template = require("gulp-template");
const uglify = require("gulp-uglify");

function clean(done) {
  rimraf("./build", function() {});
  rimraf("./dist", function() {});
  done();
}

function favicons() {
  return src("./src/favicons/**/*")
    .pipe(dest("./build"))
    .pipe(dest("./dist"));
}

function html() {
  return src("src/**/*.html")
    .pipe(
      data(function() {
        return JSON.parse(fs.readFileSync("./data/site.json"));
      })
    )
    .pipe(
      data(function() {
        return JSON.parse(fs.readFileSync("./secret.json"));
      })
    )
    .pipe(template())
    .pipe(dest("./build"))
    .pipe(dest("./dist"));
}

// Copy images from source files into 'build' and 'dist'
function images() {
  return src("./src/images/**/*")
    .pipe(dest("./build/images"))
    .pipe(dest("./dist/images"));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: "./build"
    }
  });
  done();
}

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

function styles() {
  return (
    src("./src/scss/**/*.scss")
      // Expanded stylesheets in 'build'
      .pipe(sass.sync({ outputStyle: "expanded" }).on("error", sass.logError))
      .pipe(dest("./build/css"))

      // Compressed stylesheets in 'dist'
      .pipe(sass.sync({ outputStyle: "compressed" }).on("error", sass.logError))
      .pipe(dest("./dist/css"))
  );
}

function inlineSources() {
  return src("./build/*.html")
    .pipe(inlinesource())
    .pipe(dest("./dist"));
}

function watchFiles() {
  watch("./src/**/*.html", series(html, reload));
  watch("./src/js/**/*.js", series(scripts, inlineSources, reload));
  watch("./src/scss/**/*.scss", series(styles, inlineSources, reload));
}

exports.clean = clean;
exports.images = images;
exports.default = series(
  favicons,
  html,
  images,
  scripts,
  serve,
  styles,
  watchFiles
);

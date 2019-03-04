"use strict";

const { series, watch } = require("gulp");
const rimraf = require("rimraf");

const { html, inlineSources } = require("./tasks/html.js");
const { favicons, images } = require("./tasks/images.js");
const scripts = require("./tasks/scripts.js");
const { serve, reload } = require("./tasks/server.js");
const styles = require("./tasks/styles.js");

function clean(done) {
  rimraf("./build", function() {});
  rimraf("./dist", function() {});
  done();
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

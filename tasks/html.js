const { src, dest } = require("gulp");
const data = require("gulp-data");
const fs = require("fs");
const inlinesource = require("gulp-inline-source");
const template = require("gulp-template");

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

function inlineSources() {
  return src("./build/*.html")
    .pipe(inlinesource())
    .pipe(dest("./dist"));
}

module.exports = {
  html,
  inlineSources
};

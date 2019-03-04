const { src, dest } = require("gulp");
const sass = require("gulp-sass");

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

module.exports = styles;

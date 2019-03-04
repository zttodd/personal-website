const { src, dest } = require("gulp");

function favicons() {
  return src("./src/favicons/**/*")
    .pipe(dest("./build"))
    .pipe(dest("./dist"));
}

// Copy images from source files into 'build' and 'dist'
function images() {
  return src("./src/images/**/*")
    .pipe(dest("./build/images"))
    .pipe(dest("./dist/images"));
}

module.exports = {
  favicons,
  images
};

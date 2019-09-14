const { src, dest } = require("gulp");
const sass = require('gulp-sass');

function css() {
    return src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./css'));
}

exports.default = css;
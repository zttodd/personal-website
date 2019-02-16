'use strict';

const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');

function compileSass() {
    return src('./src/scss/**/*.scss')
        // Expanded stylesheets in 'build'
        .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(dest('./build/css'))

        // Compressed stylesheets in 'dist'
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('./dist/css'));
}

// Copy images from source files into 'build' and 'dist'
function copy() {
    return src('./src/images/**/*')
        .pipe(dest('./build/images'))
        .pipe(dest('./dist/images'))
}

exports.default = parallel(compileSass, copy);
'use strict';

const { src, dest, parallel, watch } = require('gulp');
const data = require('gulp-data');
const fs = require('fs');
const uglify = require('gulp-uglify');
const rimraf = require('rimraf');
const sass = require('gulp-sass');
const template = require('gulp-template');

function clean(done) {
    rimraf('./build', function() {});
    rimraf('./dist', function() {});
    done()
}

function html() {
    return src('src/**/*.html')
        .pipe(data(function() {
            return JSON.parse(fs.readFileSync('./data/site.json'));
        }))
        .pipe(template())
        .pipe(dest('./build'))
        .pipe(dest('./dist'))
}

// Copy images from source files into 'build' and 'dist'
function images() {
    return src('./src/images/**/*')
        .pipe(dest('./build/images'))
        .pipe(dest('./dist/images'))
}

function scripts() {
    return src('./src/js/**/*.js')
        .pipe(dest('./build/js'))
        .pipe(uglify())
        .pipe(dest('./dist/js'))
}

function styles() {
    return src('./src/scss/**/*.scss')
        // Expanded stylesheets in 'build'
        .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(dest('./build/css'))

        // Compressed stylesheets in 'dist'
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('./dist/css'));
}

function watchFiles() {
    watch("./src/**/*.html", html);
    watch("./src/js/**/*.js", scripts);
    watch("./src/scss/**/*.scss", styles);
}

exports.clean = clean;
exports.images = images;
exports.default = parallel(html, images, scripts, styles, watchFiles);
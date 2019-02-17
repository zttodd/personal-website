'use strict';

const { src, dest, parallel, series, watch } = require('gulp');
const data = require('gulp-data');
const fs = require('fs');
const uglify = require('gulp-uglify');
const rimraf = require('rimraf');
const sass = require('gulp-sass');
const server = require('browser-sync').create();
const template = require('gulp-template');

function clean(done) {
    rimraf('./build', function() {});
    rimraf('./dist', function() {});
    done()
}

function favicons() {
    return src('./src/favicons/**/*')
        .pipe(dest('./build'))
        .pipe(dest('./dist'))
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

function reload(done) {
    server.reload();
    done();
}

function serve(done) {
    server.init({
        server: {
            baseDir: './build'
        }
    });
    done();
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
    watch("./src/**/*.html", series(html, reload));
    watch("./src/js/**/*.js", series(scripts, reload));
    watch("./src/scss/**/*.scss", series(styles, reload));
}

exports.clean = clean;
exports.images = images;
exports.default = parallel(favicons, html, images, scripts, serve, styles, watchFiles);
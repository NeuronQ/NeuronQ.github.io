'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var ejs = require("gulp-ejs");
var yaml = require('js-yaml');
var fs = require('fs');


gulp.copy = function (src, dest) {
  return gulp.src(src, {base: '.'})
    .pipe(gulp.dest(dest));
};


gulp.task('default', ['ejs-templates', 'scripts-copy', 'sass', 'images-copy']);


/*
 * Templates
 */
gulp.task('ejs-templates', function () {
  var content = yaml.safeLoad(fs.readFileSync('./content/content.yml', 'utf8'));
  return gulp.src('./templates/**/[^_]*.ejs')
    .pipe(ejs(content)).on('error', gutil.log)
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest('../dist'));
});


/*
 * Styles
 */
var sass_options = {
  sourceComments: true,
  includePaths: ['sass']
};
gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass(sass_options).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('../dist/css'));
});


/*
 * Scripts
 */
gulp.task('scripts-copy', function () {
  return gulp.copy('./scripts/**/*', '../dist');
});


/*
 * Images
 */
gulp.task('images-copy', function () {
 return gulp.copy('./img/**/*', '../dist');
});


/*
 * Misc. files copy
 */
gulp.task('misc-files-copy', function () {
 return gulp.copy('./robots.txt', '../dist');
});



/*
 * Watch
 */
gulp.task('watch', function () {
  gulp.watch(['./templates/**/*.ejs', './content/**/*'], ['ejs-templates']);
  gulp.watch('./scripts/**/*', ['scripts-copy']);
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./images/**', ['images-copy']);
  gulp.watch('./*', ['misc-files-copy']);
});

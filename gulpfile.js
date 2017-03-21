/*
|--------------------------------------------------------------------------
| Gulpfile
|--------------------------------------------------------------------------
|
| buildfile for jquery.formulary plugin
|
*/

var gulp   = require('gulp'),
  concat   = require('gulp-concat'),
  uglify   = require('gulp-uglify'),
  rename   = require("gulp-rename"),
  addsrc   = require('gulp-add-src'),
  beautify = require('gulp-beautify');

gulp.task('default', function() {
  gulp.src(['./resources/plugin/js/main.js'])
    // normal
    .pipe(concat('dist/jquery.shares.js'))
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest('.'))
    // min
    .pipe(uglify({ preserveComments: false }))
    .pipe(rename({ suffix : '.min' }))
    .pipe(gulp.dest('.'));
});

jsDependecies = [
];

gulp.task('package', function() {
  gulp.src(['./resources/plugin/js/main.js'])
    // normal
    .pipe(addsrc.prepend( jsDependecies ))
    .pipe(beautify({indent_size: 2}))
    .pipe(concat('dist/jquery.shares.pkg.js'))
    // min
    .pipe(uglify({ preserveComments: false }))
    .pipe(rename({ suffix : '.min' }))
    .pipe(gulp.dest('.'));
});

gulp.task('build',['default', 'package']);

gulp.task('watch', function () {
  gulp.watch('src/jquery.shares.js', ['default']);
});
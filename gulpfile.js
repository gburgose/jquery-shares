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
    .pipe(concat('dist/jquery.formulator.js'))
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest('.'))
    // min
    .pipe(uglify({ preserveComments: false }))
    .pipe(rename({ suffix : '.min' }))
    .pipe(gulp.dest('.'));
});

jsDependecies = [
  './node_modules/jquery-form/src/jquery.form.js',
  './node_modules/jquery-validation/dist/jquery.validate.js',
  './node_modules/jquery-validation/dist/additional-methods.js',
  './node_modules/jquery.rut/jquery.rut.js'
];

gulp.task('package', function() {
  gulp.src(['./resources/plugin/js/main.js'])
    .pipe(addsrc.prepend( jsDependecies ))
    .pipe(uglify({ preserveComments: false }))
    .pipe(rename({ suffix : '.min' }))
    .pipe(concat('dist/jquery.formulator.pkg.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('build',['default', 'package']);

gulp.task('watch', function () {
  gulp.watch('src/jquery.formulator.js', ['default']);
});
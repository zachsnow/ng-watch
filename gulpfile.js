(function () {
  'use strict';

  var karma = require('karma');
  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
  });

  var testFiles;

  gulp.task('test', function (done) {
    new karma.Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done).start();
  });

  gulp.task('jshint', function () {
    return gulp.src(['.tmp/**/*.js'])
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe($.jshint.reporter('fail'));
  });

  gulp.task('compress', function() {
    return gulp.src(['.tmp/**/*.js'])
      .pipe($.uglify())
      .pipe($.concat('watch.min.js'))
      .pipe(gulp.dest('./'))
      .pipe($.size());
  });

  gulp.task('concat', function() {
    return gulp.src(['.tmp/**/*.js'])
      .pipe($.concat('watch.js'))
      .pipe(gulp.dest('./'))
      .pipe($.size());
  });

  gulp.task('default', ['build']);

  gulp.task('build', ['test', 'jshint', 'compress', 'concat']);
})();

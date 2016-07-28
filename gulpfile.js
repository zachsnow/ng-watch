(function () {
  'use strict';

  var karma = require('karma');
  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
  });

  var testFiles;

  gulp.task('test', function(done) {
    new karma.Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, function(){
      done();
    }).start();
  });

  gulp.task('compress', function() {
    return gulp.src(['src/**/*.js'])
      .pipe($.uglify())
      .pipe($.concat('watch.min.js'))
      .pipe(gulp.dest('build/'))
      .pipe($.size());
  });

  gulp.task('concat', function() {
    return gulp.src(['src/**/*.js'])
      .pipe($.concat('watch.js'))
      .pipe(gulp.dest('build/'))
      .pipe($.size());
  });

  gulp.task('default', ['build']);

  gulp.task('build', ['test', 'compress', 'concat']);
})();

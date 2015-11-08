var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var errorHandler = function(error) {
    console.log('Error!');
    throw error;
}

gulp.task('frontend', function () {
  var options = {
      debug: true
  };

  var b = browserify(options)
    .add('./app/index.js')
    .transform(babelify, {presets: ['es2015', 'react']})
    .bundle()
    .on('error', errorHandler)
    .pipe(source('index.bundle.js'))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('watch', function () {
  gulp.watch(['app/**/*.js'], ['frontend']);
});


gulp.task('build', ['frontend']);
gulp.task('dev', ['build', 'watch']);

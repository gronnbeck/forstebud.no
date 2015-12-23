var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var path = require('path');

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
  gulp.watch(['app/less/*.less'], ['less']);
});

gulp.task('less', function () {
  return gulp.src('./app/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/app/css'));
});


gulp.task('build', ['frontend', 'less']);
gulp.task('dev', ['build', 'watch']);

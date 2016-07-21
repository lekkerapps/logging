var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');

var paths = require('../paths');
var compileOptions = require('../compileOptions');

function compileWithOption(src, output, options) {
  return gulp.src(src)
      .pipe(plumber())
      .pipe(babel(options))
      .pipe(plumber.stop())
      .pipe(gulp.dest(paths.buildDir + '/' + output));
}

function compile() {
  var ret = gulp.src(paths.src);
  Object.keys(compileOptions).forEach((option) => {
    ret = ret && compileWithOption(paths.src, compileOptions[option].output, compileOptions[option].options);
  });
  return ret;
}

gulp.task('compile', () => {
  return compile();
});

gulp.task('compile-test', () => {
  return compileWithOption(paths.test, 'test', compileOptions.es5.options);
});

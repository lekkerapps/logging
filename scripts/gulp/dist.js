var gulp = require('gulp');
var paths = require('../paths');
var runSequence = require('run-sequence');

gulp.task('copy', function() {
  return gulp.src(paths.buildDir + '/**')
    .pipe(gulp.dest(paths.distDir));
});

gulp.task('dist', function(callback) {
  return runSequence('clean', 'compile', 'copy', callback);
});

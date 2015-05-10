var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', function() {
  return gulp.src([paths.output,paths.e2eSpecsDist,paths.unitSpecsDist])
    .pipe(vinylPaths(del));
});

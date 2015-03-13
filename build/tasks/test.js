var gulp = require('gulp');
var karma = require('karma').server;
var paths = require('../paths');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

var tsProject = ts.createProject({
  declarationFiles: false,
  noExternalResolve: false,
  target: 'ES5',
  module: 'AMD'
});

// compile unit test TS file
gulp.task('build-test', function () {
    var tsResult = gulp.src([paths.unitSpecsSrc, paths.dtsSource])
        .pipe(ts(tsProject));
    return tsResult.js
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/' + paths.root }))
    .pipe(gulp.dest(paths.unitSpecsDist));
    
    
});

gulp.task('test', function(callback) {
    return runSequence(
        'clean',
        'build-system',
        'build-test',
        'karma',
        callback
    );
});

/**
 * Run test once and exit
 */
gulp.task('karma', function (done) {
    karma.start({
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: true
    }, function(e) {
        done();
    });
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    karma.start({
        configFile: __dirname + '/../../karma.conf.js'
    }, function(e) {
        done();
    });
});

/* gulpfile.js */

/* Plugins */
var gulp      = require('gulp'),
    ftp       = require('vinyl-ftp'),
    webpack   = require('webpack-stream'),
    sync      = require('gulp-npm-script-sync');

/* Task Library */
gulp.task('ftp', require('./gulp-tasks/deploy')(gulp, ftp));
gulp.task('webpackprod', require('./gulp-tasks/webpack-production')(gulp, webpack));

gulp.task('prod', ['webpackprod']);

/* Default Task */
gulp.task('default', ['prod']);

sync(gulp, {
  path: './package.json',
  excluded: ['default', 'webpackprod']
});
/* gulpfile.js */

/* Plugins */
var gulp    = require('gulp'),
    ftp     = require('vinyl-ftp'),
    webpack = require('webpack-stream'),
    sync    = require('gulp-npm-script-sync');

/* Task Library */
gulp.task('deploy', require('./gulp-tasks/deploy')(gulp, ftp));
gulp.task('wpakprod', require('./gulp-tasks/webpack-production')(gulp, webpack));

gulp.task('push', ['wpakprod', 'deploy']);

/* Default Task */
gulp.task('default', ['deploy']);

sync(gulp, {
  path: './package.json',
  excluded: ['default', 'deploy', 'wpakprod']
});
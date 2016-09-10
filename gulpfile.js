/* gulpfile.js */

/* Plugins */
var gulp      = require('gulp'),
    ftp       = require('vinyl-ftp'),
    sync      = require('gulp-npm-script-sync');

/* Task Library */
gulp.task('ftp', require('./gulp-tasks/deploy')(gulp, ftp));

/* Default Task */
gulp.task('default', ['ftp']);

sync(gulp, {
  path: './package.json',
  excluded: ['default']
});
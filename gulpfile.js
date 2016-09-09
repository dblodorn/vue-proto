/* gulpfile.js */

/* Plugins */
var gulp        = require('gulp'),
    ftp         = require('vinyl-ftp');

/* Task Library */
gulp.task('deploy', require('./gulp-tasks/deploy')(gulp, ftp));

/* Default Task */
gulp.task('default', ['deploy']);

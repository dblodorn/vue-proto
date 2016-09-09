module.exports = function ( gulp, webpack ) {
  return function(){
    gulp.src('src/entry.js')
      .pipe(webpack( require('../webpack.production.config.js') ))
      .pipe(gulp.dest('./public/js/'))
  };
};
module.exports = function ( gulp, webpack ) {
  return function(){
    gulp.src('src/entry.js')
      .pipe(webpack( require('../webpack.prod.config.js') ))
      .pipe(gulp.dest('./public/js/'))
  };
};
module.exports = function ( gulp, ftp ) {
  return function () {
    
    var user = '',
        password = '',
        host = '',
        port = 21,
        localFilesGlob = ['./www/**/*','./www/.htaccess'],
        remoteFolder = '';

    function getFtpConnection() {
      return ftp.create({
        host: host,
        port: port,
        user: user,
        password: password,
        parallel: 5
      });
    }

    var conn = getFtpConnection();

    gulp.src(localFilesGlob, { base: './www', buffer: false })
        .pipe( conn.newer( remoteFolder ) )
        .pipe( conn.dest( remoteFolder ) );
  };
};
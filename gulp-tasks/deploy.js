module.exports = function ( gulp, ftp ) {
  
  return function () {

    var credenitals = require('../deploy-credentials.json')

    var user = credenitals.user,
        password = credenitals.password,
        host = credenitals.host,
        port = 21,
        localFilesGlob = ['./public/index.html','./public/.htaccess','./public/js/**','./public/imgs/**/*'],
        remoteFolder = credenitals.remoteFolder;

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

    gulp.src(localFilesGlob, { base: './public', buffer: false })
        .pipe( conn.newer( remoteFolder ) )
        .pipe( conn.dest( remoteFolder ) );
  };
};
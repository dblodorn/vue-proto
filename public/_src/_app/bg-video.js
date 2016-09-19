import '../_sass/_video-bg.sass'

define('bgVideo', ['pixi','bowser'], function(PIXI,bowser) {

  var bgVideo  = {};

  bgVideo.init = function(videoSource,videoElement){
    
    // BOOTSTRAP VIDEO PLAYER
    var videoPlayer = function(videoSource,videoElement){
      var video = document.createElement("video");
      
      video.preload = "auto";
      video.loop = true;
      video.src = videoSource;
      var renderer = PIXI.autoDetectRenderer(1280, 720, { transparent: true });

      document.getElementById(videoElement).appendChild(renderer.view);

      var stage = new PIXI.Container();
      var texture = PIXI.Texture.fromVideo(video);
      var videoSprite = new PIXI.Sprite(texture);

      videoSprite.width = renderer.width;
      videoSprite.height = renderer.height;

      stage.addChild(videoSprite);
    
      bgVideo.play = function(){
        function animate(){
          renderer.render(stage);
          requestAnimationFrame(animate);
        }
        animate();
      }
    }

    // APPEND AND PLAY THE VIDEO
    setTimeout(function(){
      if (bowser.mobile || bowser.tablet) {
        console.log('mobile tablet');
      } else {
        if (bowser.firefox) {
          videoPlayer(videoSource,videoElement);
        } else if (bowser.msie) {
          console.log('MSIE');
        } else {
          videoPlayer(videoSource,videoElement);
        }
        bgVideo.play();
      }
    }, 1000);
  }

  return bgVideo;

});
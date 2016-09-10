define('browser', ['bowser'], function(bowser) {

  var browser  = {},
      body = document.querySelector("body");

  browser.init = function(){
    
    console.log('bowser init');

    if (bowser.mobile || bowser.tablet) {
      body.classList.add('mobile-tablet');
    } else {
      if (bowser.firefox) {
        body.classList.add('firefox');
      } else if (bowser.msie) {
        body.classList.add('msie');
      } else if (bowser.chrome) {
        body.classList.add('chrome');
      }
      body.classList.add('desktop');
    }

  }

  return browser;

});
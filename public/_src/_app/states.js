define('states', ['simplestatemanager'], function(ssm) {

  var states  = {},
      html = document.querySelector("html");

  states.init = function(){
  
    ssm.addState({
      id: 'mobile',
      query: '(max-width: 1023px)',
      onEnter: function(){
        html.className = "mobile";
      }
    });

    ssm.addState({
      id: 'desktop',
      query: '(min-width: 1024px)',
      onEnter: function(){
        html.className = "desktop";
      }
    });

  }

  return states;

});
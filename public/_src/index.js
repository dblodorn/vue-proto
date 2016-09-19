// IMPORT SASS BASE
import './_sass/main.sass'

// DEPENDENCIES
import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueTouch from 'vue-touch'
import VueSEO from 'vue-seo'
import series from 'async-series'
import AOS from 'aos'
import smoothScroll from 'smooth-scroll'

// USER FUNCTIONS
import states from './_app/states.js'
import utility from './_app/utilities.js'
import browser from './_app/browser-detect.js'
import bgVideo from "./_app/bg-video.js"

// IMPORT COMPONENTS
import Shell from './_vue/Shell.vue'
import Landing from './_vue/Landing.vue'
import Header from './_vue/Header.vue'
import Nav from './_vue/Nav.vue'
import Footer from './_vue/Footer.vue'

// REGISTER GLOBAL UI COMPONENTS
Vue.component('header-component', Header)
Vue.component('footer-component', Footer)
Vue.component('nav-component', Nav)

// IMPORT DATA
import landingData from './_data/landing.json'

// VUE APP
Vue.use(VueRouter)
Vue.use(VueSEO)
Vue.use(VueTouch)

const App = Vue.extend()

// ROUTER OPTIONS
window.router = new VueRouter({
  hashbang: false,
  history: true,
  mode: 'html5',
  linkActiveClass: 'active',
  transitionOnLoad: true,
  root: '/'
});

// ROUTES CONFIG
router.map({
  '/': {
    component: Shell,
    subRoutes: {
      '/': {
        component: Landing,
        data: landingData
      }
    }
  }
})

// BOOTSTRAP APP
var initApp = function() {
  series([
    function(done) {
      router.start(App, 'body')
      done()
    },
    function(done) {
      browser.init();
      done()
    },
    function(done) {
      states.init();
      done()
    },
    function(done) {
      AOS.init();
      done()
    },
    function(done) {
      smoothScroll.init({
        selector: '[data-scroll]',
        selectorHeader: null,
        speed: 200,
        easing: 'easeInOutCubic',
        offset: 60,
        callback: function ( anchor, toggle ) {}
      });
      done()
    },
    function(done) {
      setTimeout(function(){
        utility.preload(landingData.preload_images)
      }, 1000);
      done()
    },
    function(done) {
      utility.scrollCheck(50);
    }
  ], function(err) {
    console.log(err.message) // "another thing"
  })
}

document.addEventListener('DOMContentLoaded', initApp);
import './_sass/main.sass'

// Dependencies
import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Functions
import states from './_app/states.js'
import utility from "./_app/utilities.js"

// Components
import Shell from './_vue/Shell.vue'
import Landing from './_vue/Landing.vue'
import Header from './_vue/Header.vue'
import Nav from './_vue/Nav.vue'
import Footer from './_vue/Footer.vue'

// Data
import landingData from './_data/landing.json'

// REGISTER COMPONENTS
Vue.component('header-component', Header)
Vue.component('footer-component', Footer)
Vue.component('nav-component', Nav)

// APP
Vue.use(VueRouter);

const App = Vue.extend()

window.router = new VueRouter({
  hashbang: false,
  history: true,
  mode: 'html5',
  linkActiveClass: 'active',
  transitionOnLoad: true,
  root: '/'
});

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

var initApp = function() {
  router.start(App, 'body')
  states.init();
  setTimeout(function(){
    utility.preload(landingData.preload_images)
  }, 500);
}

document.addEventListener('DOMContentLoaded', initApp);
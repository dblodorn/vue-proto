import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'

// transOne
Vue.transition('transOne', {
  css: false,
  enter: function (el, done) {
    $(el)
      .css('width', 0)
      .delay(250).animate({ width: '100%' }, 200, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    $(el)
      .css('width', '100%')
      .delay(300).animate({ width: 0 }, 200, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})

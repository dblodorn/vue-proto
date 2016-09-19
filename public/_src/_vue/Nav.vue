<template lang="jade">
  button.open-nav(v-on:click="navdrawer")
    h5 MENU
  nav(v-touch:swiperight="onSwipeRight")
    button.close-nav(v-on:click="navdrawer")
      img(v-bind:src="'imgs/ui/close-btn.svg'")
    ul
      li(v-for="navitem in toc.nav_items")
        a(data-scroll :href="navitem.link" v-on:click="navdrawer") {{ navitem.title }}
</template>

<script>

  import $ from 'jquery'
  import Toc from '../_data/toc.json'

  export default {
    data () {
      return {
        toc: {}
      }
    },
    ready: function(){
      var data = Toc;
      this.$set('toc', data);
    },
    methods: {
      navdrawer: function (event) {
        $('body').toggleClass('nav-active')
      },
      onSwipeRight: function (event) {
        $('body').toggleClass('nav-active')
      }
    }
  }
  
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  // NAV DRAWER
  nav
    @extend %smooth
    @extend %box-shadow
    background-color: $yellow
    display: flex
    position: fixed
    top: 0
    right: -50%
    height: 100%
    width: 50%
    padding: $header-height 2rem
    background-color: $white
    ul
      display: flex
      flex-flow: column
      padding: 2rem
      li
        margin-left: 2rem
        margin-bottom: 2rem

    .close-nav
      @extend %smooth
      display: block
      position: absolute
      top: 2rem
      right: 2rem
      width: 3rem
      height: 3rem
      cursor: pointer
      opacity: .5
      img
        width: 100%
        height: 100%
        margin: 0
      &:hover
        opacity: 1
  
  body.nav-active
    nav
      right: 0

  button
    border: 0
    padding: 0
    background-color: $transparent
    cursor: pointer

</style>

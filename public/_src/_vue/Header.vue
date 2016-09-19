<template lang="jade">
  header
    button.logo(v-on:click="homeReset")
      img(v-bind:src="header_data.logo")
    nav-component
</template>

<script>

  import $ from 'jquery'
  import smoothScroll from 'smooth-scroll'
  import headerData from '../_data/header.json'

  export default {
    data () {
      return {
        header_data: {}
      }
    },
    ready: function(){
      var data = headerData;
      this.$set('header_data', data);
    },
    methods: {
      homeReset: function (event) {
        var anchor = document.querySelector('#landing')
        $('body').removeClass('nav-active')
        smoothScroll.animateScroll(anchor)
      }
    }
  }
  
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  // HEADER

  body.past-header
    header
      background-color: $magenta

  header
    @extend %box-shadow
    @extend %aligner
    width: 100%
    position: fixed
    height: $header-height
    top: 0
    left: 0
    background-color: $white
    z-index: $header-z
    padding: 0 $base-padding
    
    button.logo
      margin-right: auto
      height: 2rem
      background: none
      border: 0
      padding: 0
      cursor: pointer
      img
        height: 100%
        width: auto
     
</style>

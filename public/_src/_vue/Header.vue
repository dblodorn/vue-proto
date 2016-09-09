<template lang="jade">
  header
    .logo
      img(v-bind:src="header_data.logo")
    nav-component
</template>

<script>

  import $ from 'jquery'
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
    }
  }
  
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  // HEADER

  header
    @extend %box-shadow
    @extend %aligner
    width: 100vw
    position: fixed
    height: $header-height
    top: 0
    left: 0
    background-color: $white
    z-index: $header-z
    padding: 0 $base-padding
    
    .logo
      margin-right: auto
      height: 4rem
      img
        height: 100%
        width: auto
     
</style>

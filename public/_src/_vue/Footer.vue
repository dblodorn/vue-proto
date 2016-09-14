<template lang="jade">
  footer
    .upper-footer
      .logo
        img(v-bind:src="footer_data.logo")
    .inner-footer
      address {{ footer_data.address }}
</template>

<script>

  import $ from 'jquery'
  import FooterData from '../_data/footer.json'

  export default {
    data () {
      return {
        footer_data: {}
      }
    },
    ready: function(){
      var data = FooterData;
      this.$set('footer_data', data);
    }
  }
  
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  // FOOTER

  $footer-content-height: 10rem

  footer
    @extend %box-shadow
    display: flex
    flex-direction: column
    flex-wrap: wrap
    position: relative
    //bottom: -$footer-content-height
    left: 0
    width: 100%
    background-color: $green
    height: $footer-height + $footer-content-height
    padding: 0 $base-padding
    z-index: $footer-z

  .upper-footer
    @extend %aligner
    height: $footer-height
    .logo
      height: 2rem
      img
        height: 100%
        width: auto

  .inner-footer
    @extend %aligner
    height: $footer-content-height
     
</style>

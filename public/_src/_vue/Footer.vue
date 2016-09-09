<template lang="jade">
  footer
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

  footer
    @extend %aligner
    background-color: $grey
    height: $footer-height
    padding: 0 $base-padding

  .inner-footer
    margin-right: auto
     
</style>

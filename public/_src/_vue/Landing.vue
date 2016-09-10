<template lang="jade">
  section#landing(v-bind:style="{ backgroundImage: 'url('+ landing.bgimg +')' }")
    article
      h1 {{ landing.header_one }}
</template>

<script>
  import $ from 'jquery'
  import utility from "../_app/utilities.js"

  export default {
    data () {
      return {
        landing:{}
      }
    },
    route: {
      canReuse: false,
        activate: function() {
        
        $('body').animate({ scrollTop: 0 }, 5);
        
        utility.setId('body','landing')
        
        var data = this.$route.data;
        this.$set('landing', data);
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  section#landing
    @extend %full-bg
    padding-top: $header-height + 4rem
    height: 200vh

</style>

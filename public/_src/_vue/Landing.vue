<template lang="jade">
  seo-title(value="VUE-PROTO | Welcome")
  section#landing(v-bind:style="{ backgroundImage: 'url('+ landing.bgimg +')' }")
    #video-bg
  section#section2
    article
      h1 {{ landing.header_two }}
  section#section3
    article
      h1 {{ landing.header_three }}
</template>

<script>
  
  import $ from 'jquery'
  import utility from "../_app/utilities.js"
  import bgVideo from "../_app/bg-video.js"

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
        // VIDEO LOAD
        bgVideo.init('imgs/fpo/vid-test.mp4','video-bg');
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  section#landing
    @extend %full-bg

  section#landing,
  section#section2,
  section#section3
    padding-top: $header-height + 4rem
    height: 100vh
    *
      color: $white

  section#section2
    background-color: $pink

  section#section3
    background-color: $orange

</style>

<template lang="jade">
  nav
    ul
      li(v-for="navitem in toc.nav_items")
        a {{ navitem.title }}
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
    }
  }
  
</script>

<style lang="sass?indentedSyntax" scoped>

  @import "../_sass/utilities/_utilities.sass"

  // FOOTER
  nav
    background-color: $yellow
    ul
      display: flex
      flex-flow: row
      li
        margin-left: 2rem
     
</style>

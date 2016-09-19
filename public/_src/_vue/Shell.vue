<template lang="jade">
  header-component
  main
    router-view
  footer-component
</template>

<script></script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"
  
  #wrapper
    display: block
    position: relative
    width: 100%
    height: 100%
    top: 0px
    left: 0px
    overflow: hidden
    padding: 0px
    margin: 0px

  #site
    height: 0

  main
    position: relative
    width: 100%
    min-height: calc(100% - $footer-height)
    top: 0%
    bottom: 0px
    display: block
    z-index: 15

</style>

<template lang="jade">
  header-component
  main
    router-view
  footer-component
</template>

<script></script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"
   
  main
    width: 100vw
    min-height: calc(100vh - #{$footer-height})

</style>

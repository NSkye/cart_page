<template>
  <header class='header'>
    <div class='header__contents'>
      <div class='header__secondary-row'></div>
      <div class='header__main-row'></div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.header
  box-sizing border-box
  width 100%
  background $background-darken
  &__contents
    box-sizing border-box
    margin 0 auto
    max-width 1200px
    padding-top 22px
    padding-bottom 24px
    padding-left 16px
    padding-right 16px
    width 100%
</style>

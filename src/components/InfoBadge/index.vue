<template>
  <span class='info-badge'>
    <span class='info-badge__text'>{{ text }}</span>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'info'
    }
  }
}
</script>

<style lang="stylus">
@import '~@/vars'

.info-badge
  box-sizing border-box
  padding .3em .8em
  border .1em solid $line-accent
  min-width 5.8em
  min-height 2em
  border-radius .3em
  &__text
    font-size 1em
    font-weight bold
    color $line-accent
</style>

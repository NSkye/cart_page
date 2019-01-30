<template>
  <span class='quantity-display'>
    <i role='button' aria-label='убавить' class='quantity-display__decrement' v-on:click='$emit("decrement")' />
    <span class='quantity-display__value'>{{ value }}</span>
    <i role='button' aria-label='добавить' class='quantity-display__increment' v-on:click='$emit("increment")' />
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.quantity-display
  width 9em
  line-height 3.7rem
  display flex
  justify-content space-between
  align-items center
  &__value
    font-size 2.7rem
    margin-left 2.7
    font-weight 600
    color $line-core
  &__increment, &__decrement
    font-style normal
    font-size 2.7rem
    font-family sans-serif
    color $line-light
    transition color .2s
    cursor pointer
    &:hover
      color $line-accent
  &__increment::before
    content '+'
  &__decrement::before
    content '–'
</style>

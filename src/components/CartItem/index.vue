<template>
  <div class='cart-item'>
    <h2 class='cart-item__heading'>
      <a class='cart-item__link' href='#'>{{ title }}</a>
      <i class='icon-trash cart-item__remove' />
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Missing title'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.cart-item
  padding 3em 0
  border-top 1px solid $line-lighter
  border-bottom 1px solid $line-lighter
  width 100%
  &__heading
    display flex
    justify-content space-between
    align-items center
    width 100%
    margin 0
    line-height 2rem
    font-size 1.8rem
    font-weight normal
    color $line-core
  &__link
    text-decoration none
    color inherit
    transition color .1s
    &:hover
      color $line-accent
  &__remove
    cursor pointer
    font-size 1.98rem
    color $line-lighter
    transition color .1s
    &:hover
      color $line-danger
</style>

<template>
  <a href='#' class='cart-header'>
    <div class='cart-header__graphic'>
      <i class='icon-cart cart-header__icon' />
      <span class='cart-header__badge' v-show="itemCount">{{ itemCount }}</span>
    </div>
    <span class='cart-header__label'>Корзина</span>
  </a>
</template>

<script>
export default {
  props: {
    itemCount: Number
  }
}
</script>


<style lang="stylus" scoped>
@import '~@/vars'

.cart-header
  text-decoration none
  display inline-block
  color $line-light
  font-weight 600
  &__label
    font-size 1.4em
  &__graphic
    display inline-block
    position relative
    height 100%
    width auto
    color $line-accent
    margin-right .1em
  &__icon
    font-size 2.4em
  &__badge
    position absolute
    top 0
    font-size 1.1em
    right -.2em
    border-radius 45%
    font-weight bold
    padding 0 .5em
    display block
    background $line-special-1
    color $white
</style>

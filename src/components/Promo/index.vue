<template>
  <a class='promo' href='#'>
    <i class='icon-promo promo__icon'/>
    Ввести промокод
  </a>
</template>

<style lang="stylus" scoped>
@import '~@/vars'

.promo
  color $line-special-1
  transition color .1s
  cursor pointer
  text-decoration none
  font-weight bold
  line-height 2em
  display flex
  align-items center
  &:hover
    color $line-special-3
  &__icon
    display inline-block
    color $line-special-1
    font-size .75em
    padding-right .8em
</style>



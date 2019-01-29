<template>
  <a class='promo' href='#'>
    <i class='icon-promo promo__icon'/>
    <span class='promo__phrase-fragment promo__full'>ввести&nbsp;</span>
    <span class='promo__phrase-fragment promo__minimal'>промо</span>
    <span class='promo__phrase-fragment promo__half'>код</span>
  </a>
</template>

<style lang="stylus" scoped>
@import '~@/vars'

.promo
  color $line-special-1
  transition color .1s
  cursor pointer
  text-decoration none
  font-size 1.4em
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
  &__full
    text-transform capitalize
  @media screen and (max-width 990px)
    &__full
      display none
    &__minimal
      text-transform capitalize
  @media screen and (max-width 960px)
    &__half
      display none
</style>

<template>
  <a class='gold-status' href='#'>
    <i class='icon-crown gold-status__icon'/>
    <span class='gold-status__minimal'>GOLD статус</span>
    <span class='gold-status__full'>&nbsp;- Выберите ПОДАРОК!</span>
  </a>
</template>

<style lang="stylus" scoped>
@import '~@/vars'

.gold-status
  color $line-special-2
  transition color .1s
  cursor pointer
  text-decoration none
  font-weight bold
  font-size 1.4em
  line-height 2em
  display flex
  align-items center
  &:hover
    color $line-special-3
  &__icon
    display inline-block
    color $line-special-2
    font-size .9em
    padding-right .4em
  @media screen and (max-width $break-tablet)
    &__full
      display none
</style>

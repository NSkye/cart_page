<template>
  <a class='gold-status' href='#'>
    <i class='icon-crown gold-status__icon'/>
    GOLD статус - Выберите ПОДАРОК!
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
</style>



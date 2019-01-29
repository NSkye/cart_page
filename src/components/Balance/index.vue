<template>
  <span class='balance'>
    <span class='balance__label'>Ваш счет</span>
    <span class='balance__amount'>
      {{ formattedAmount }} <span role='img' aria-label='рубль'>₽</span>
    </span>
    <i class='icon-dropdown balance__icon' />
  </span>
</template>

<script src='./main'></script>

<style lang="stylus" scoped>
@import '~@/vars'

.balance
  color $line-light
  transition color .1s
  cursor pointer
  height 2.2em
  display flex
  align-items flex-end
  &:hover
    color $line-accent
  &__label
    font-size 1.3em
    font-weight 600
    margin-right .4em
    @media screen and (max-width 990px)
      display none
  &__amount
    font-weight bold
    color $line-accent
    font-size 1.6em
  &__icon
    color $line-accent
    font-size .8em
    padding-left .4em
    align-self center
</style>

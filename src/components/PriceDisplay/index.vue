<template>
  <span class='price-display' v-bind:class='{ [type]: true, [color]: true }'>
    <span v-if='title' class='price-display__title' v-bind:class='{ [type]: true, [color]: true }'>
      {{ title }}
    </span>
    <strong class='price-display__value' v-bind:class='{ [type]: true, [color]: true, "is-free": isFree }'>
      {{ !isFree ? formattedValue : 'Бесплатно' }} <span v-show='!isFree' role='img' aria-label='рубль'>₽</span>
    </strong>
  </span>
</template>

<script src='./main'></script>

<style lang="stylus" scoped>
@import '~@/vars'

.price-display
  display flex
  align-items flex-end
  flex-wrap wrap
  justify-content flex-end
  &.total
    width 100%
    justify-content space-between
  &__title
    font-size 1.3rem
    font-weight 600
    color $line-light
    margin-right 1rem
    line-height 2.7rem
    text-align right
    &.total
      font-size 1.7rem
      margin-right 0
      color $line-core
      line-height 2.3rem
    &.accent, &.total.accent
      color $line-accent
    &.gold, &.total.gold
      color $line-special-2
  &__value
    font-size 2rem
    font-weight bold
    color $line-core
    line-height 2.7rem
    white-space nowrap
    &.total
      font-size 2.2rem
      margin-left auto
      line-height 3rem
      &.is-free
        font-size 2rem
        color $line-accent
        align-self flex-end
    &.gold
      color $line-special-2
    &.accent
      color $line-accent
</style>

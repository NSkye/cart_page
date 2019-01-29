<template>
  <span class='balance'>
    <span class='balance__label'>Ваш счет</span>
    <span class='balance__amount'>
      {{ formatBalance(amount) }} <span role='img' aria-label='рубль'>₽</span>
    </span>
    <i class='icon-dropdown balance__icon' />
  </span>
</template>

<script>
const formatBalance = amount => amount <= 0 ? '0' : String(amount)
  .split('')
  .reverse()
  .map((v, i) => !(i%3) ? v + ' ' : v)
  .reverse()
  .join('')

export default {
  props: {
    amount: Number,
  },
  methods: {
    formatBalance
  }
}
</script>

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

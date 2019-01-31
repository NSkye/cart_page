<template>
  <div class='all-total'>
    <div class="all-total__info">
      <PriceDisplay
        class='all-total__shipping'
        title='Доставка'
        :value='shipping'
        type='total'
        color='regular'
        :is-free='!shipping'
      />
      <PriceDisplay
        class='all-total__price-entry'
        title='Итоговая стоимость'
        :value='total'
        type='total'
        color='regular'
      />
      <PriceDisplay
        class='all-total__price-entry'
        :title='`+ ${bonusPercents}% на личный счет от GOLD статуса`'
        :value='bonusMoney'
        type='total'
        color='gold'
      />
      <PriceDisplay
        class='all-total__price-entry'
        title='На личный счет вернется'
        :value='cashBack'
        type='total'
        color='accent'
      />
    </div>
    <span class="all-total__submit">Перейти к оформлению заказа</span>
  </div>
</template>

<script>
import PriceDisplay from '@@/PriceDisplay'

export default {
  components: {
    PriceDisplay
  },
  props: {
    shipping: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    bonusPercents: { type: Number, default: 0 },
    bonusMoney: { type: Number, default: 0 },
    cashBack: { type: Number, default: 0 }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.all-total
  box-sizing border-box
  display flex
  flex-direction column
  align-items center
  &__info
    display flex
    flex-direction column
    width 100%
    padding 0 3em
    box-sizing border-box
    border-left 1px solid $line-border
    border-right 1px solid $line-border
    border-top 1px solid $line-border
  &__shipping
    padding 3.3em 0
    border-bottom 1px solid $line-border
  &__price-entry
    margin-bottom 2.2em
    &:nth-child(2)
      margin-top 3.6em
    &:last-child
      margin-bottom 3.1em
  &__submit
    line-height 4.8rem
    font-size 2rem
    color $white
    background-color $line-accent
    cursor pointer
    transition background-color .2s
    width 100%
    text-align center
    font-weight bold
    text-transform uppercase
    &:hover
      background-color $line-special-3
</style>

<template>
  <main class='main-section'>
    <SectionHeading
      title='Вот что в вашей корзине'
      control-title='Очистить корзину'
      control-type='danger'
      @clicked='removeAllItems'
    />
    <ul class='main-section__items'>
      <CartItem
        v-for='item in getItems'
        v-bind:key='item.uid'
        :uid='item.uid'
        :title='item.name'
        :images='item.images'
        :quantity='item.quantity'
        :quantity-adjust='!item.fixedQuantity'
        :color='item.color'
        :size='item.size'
        :full-price='item.price'
        :avaliable-discount='item.maxDiscount'
        :minimal-discount='item.minDiscount'
        :is-gift='item.isGift'
        @increment='incrementItemQuantity'
        @decrement='decrementItemQuantity'
        @delete='removeItem'
      />
    </ul>
    <CartItemsSummary
      :items-count='getItemsCount'
      :total-cost='getItemsPriceCount'
      :discount='getActualDiscount'
    />
    <DiscountRangeSelector
      class='main-section__range-selector'
      :min='0'
      :max='getMaxDiscount'
      @update='updateUsedDiscount'
    />
    <AllTotal
      class='main-section__all-total'
      :shipping='getAllTotal.shipping'
      :total='getAllTotal.total'
      :bonus-percents='getAllTotal.bonusInPercents'
      :bonus-money='getAllTotal.bonusInMoney'
      :cash-back='getAllTotal.cashBack'
    />
    <SectionHeading
      title='Мы также рекомендуем'
      control-title='Посмотреть всё'
      control-type='regular'
    />
  </main>
</template>

<script>
import SectionHeading from '@@/SectionHeading'
import CartItem from '@@/CartItem'
import CartItemsSummary from '@@/CartItemsSummary'
import DiscountRangeSelector from '@@/DiscountRangeSelector'
import AllTotal from '@@/AllTotal'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    SectionHeading,
    CartItem,
    CartItemsSummary,
    DiscountRangeSelector,
    AllTotal
  },
  computed: {
    ...mapGetters([
      'getItems',
      'getItemsCount',
      'getItemsPriceCount',
      'getActualDiscount',
      'getMaxDiscount',
      'getUsedPersonalAccount',
      'getAllTotal'
    ])
  },
  methods: {
    ...mapMutations([
      'removeItem',
      'removeAllItems',
      'incrementItemQuantity',
      'decrementItemQuantity',
      'updateUsedDiscount'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.main-section
  flex-grow 1
  max-width 740px
  width 100%
  margin 0 auto
  padding 0 16px
  @media screen and (max-width 782px)
    box-sizing border-box
  &__items
    list-style none
    margin 0
    padding 0
    margin-bottom 6em
  &__range-selector
    margin-top 4em
    margin-bottom 7.7em
</style>

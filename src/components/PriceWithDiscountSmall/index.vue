<template>
  <span class='price-with-discount-small'>
    <span class='price-with-discount-small__full-price'>
      {{ formattedFullPrice }} <span class='price-with-discount-small__currency' role='img' aria-label='рубль'>₽</span>
    </span>
    <span class="price-with-discount-small__discount">
      &nbsp;-&nbsp;{{ formattedDiscount }} <span class='price-with-discount-small__currency' role='img' aria-label='рубль'>₽</span>
    </span>
    <span class="price-with-discount-small__result">
      &nbsp;=&nbsp;{{ formattedResult }} <span class='price-with-discount-small__currency' role='img' aria-label='рубль'>₽</span>
    </span>
  </span>
</template>

<script>
import formatNumber from '@/libs/formatNumber'

export default {
  props: {
    fullPrice: {
      type: Number,
      default: 0
    },
    avaliableDiscount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    formattedFullPrice: function () {
      return formatNumber(this.fullPrice)
    },
    formattedDiscount: function () {
      return formatNumber(this.avaliableDiscount)
    },
    formattedResult: function () {
      return formatNumber(this.fullPrice - this.avaliableDiscount)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.price-with-discount-small
  font-size 1.5rem
  font-family 'Roboto', 'Open Sans', Arial, sans-serif
  &__full-price
    font-weight 500
    color $line-special-3
  &__discount
    color $line-accent
    font-weight bold
  &__result
    font-weight 500
    color $line-special-3
  &__currency
    font-size 1.2rem
</style>

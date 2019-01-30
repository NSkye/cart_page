<template>
  <div class="cart-items-summary">
    <PriceDisplay
      class='cart-items-summary__total-price'
      :title='priceTitle'
      :value='totalCost'
      type='total'
      color='regular'
    />
    <PriceDisplay
      :title='discountTitle'
      :value='discount'
      type='total'
      color='accent'
    />
  </div>
</template>

<script>
import PriceDisplay from '@@/PriceDisplay'

export default {
  components: {
    PriceDisplay
  },
  props: {
    itemsCount: {
      type: Number,
      default: 0
    },
    totalCost: {
      type: Number,
      default: 0
    },
    discount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    priceTitle: function () {
      const itemsCountStr = String(this.itemsCount)
      const itemsCountLastDigit = Number(itemsCountStr[itemsCountStr.length - 1])
      const forms = [ 'товар', 'товара', 'товаров' ]

      let form = 2
      if (itemsCountLastDigit === 1) {
        form = 0
      } else if (itemsCountLastDigit > 1 && itemsCountLastDigit < 5) {
        form = 1
      }
      return `${this.itemsCount} ${forms[form]} на сумму`
    },
    discountTitle: function () {
      return 'Используется рублей с личного счета'
    }
  }
}
</script>

<style lang="stylus" scoped>
.cart-items-summary__total-price
  margin-bottom 1.3em
</style>

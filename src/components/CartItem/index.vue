<template>
  <div class='cart-item' role='li'>
    <h2 class='cart-item__heading'>
      <a class='cart-item__link' href='#'>{{ title }}</a>
      <i class='icon-trash cart-item__remove' />
    </h2>
    <div class='cart-item__main'>
      <ImageDisplay
        class='cart-item__images'
        :images='images'
      />
      <div class="cart-item__info">
        <div class="cart-item__traits">
          <ItemInfo
            v-if='color'
            class='cart-item__color'
            type='color'
            title='Цвет'
            :data='color'
          />
          <ItemInfo
            v-if='size'
            class='cart-item__size'
            type='text'
            title='Размер'
            :data='size'
          />
        </div>
        <QuantityDisplay
          v-if='quantity && quantityAdjust'
          :value='quantity'
          @increment='handleAmountChange("increment")'
          @decrement='handleAmountChange("decrement")'
        />
      </div>
      <div v-if='!isGift' class="cart-item__prices">
        <PriceDisplay
          class='cart-item__full-price'
          title='Полная цена'
          type='intermediate'
          color='regular'
          :value='fullPrice'
        />
        <PriceDisplay
          v-if='avaliableDiscount'
          class='cart-item__avaliable-discount'
          title='Можно оплатить с личного счета'
          type='intermediate'
          color='accent'
          :value='avaliableDiscount'
        />
        <PriceDisplay
          v-if='minimalDiscount'
          class='cart-item__minimal-discount'
          title='Минимально к оплате с личного счета'
          type='intermediate'
          color='accent'
          :value='minimalDiscount'
        />
      </div>
      <div v-if='isGift' class="cart-item__prices">
        Подарок
      </div>
    </div>
  </div>
</template>

<script src='./main'></script>

<style lang="stylus" scoped>
@import '~@/vars'

.cart-item
  padding 3em 0
  border-top 1px solid $line-lighter
  width 100%
  &:last-child
    border-bottom 1px solid $line-lighter
  &__heading
    display flex
    justify-content space-between
    align-items center
    width 100%
    margin 0
    margin-bottom 3rem
    line-height 2rem
    font-size 1.8rem
    font-weight normal
    color $line-core
  &__link
    text-decoration none
    color inherit
    transition color .1s
    &:hover
      color $line-accent
  &__remove
    cursor pointer
    font-size 1.98rem
    color $line-lighter
    transition color .1s
    &:hover
      color $line-danger
  &__main
    display flex
    flex-wrap wrap
  &__info
    flex-grow 1
    position relative
    display flex
    align-items center
  &__images
    margin-right 2em
  &__traits
    display flex
    align-items flex-start
    position absolute
    top 0
    left 0
  &__prices
    margin-left auto
    display flex
    flex-direction column
    justify-content center
    align-items flex-end
  &__full-price, &__avaliable-discount, &__minimal-discount
    margin-top .8em
</style>

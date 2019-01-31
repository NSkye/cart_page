<template>
  <div class="carousel-item">
    <div
      class="carousel-item__image"
      v-bind:style='{ backgroundImage: `url(${image})` }'
    />
    <PriceWithDiscountSmall
      class='carousel-item__price'
      :full-price='fullPrice'
      :avaliable-discount='avaliableDiscount'
    />
    <a href='url' class="carousel-item__title">
      {{ title }}
    </a>
    <div v-if='sizes && sizes.length' class="carousel-item__sizes">
      <InfoBadge v-for='(size, i) in sizes' v-bind:key='i' :text='size' />
    </div>
    <div v-if='colors && colors.length' class="carousel-item__colors">
      <ColorDisplay v-for='(color, i) in colors' v-bind:key='i' :color='color' />
    </div>
  </div>
</template>

<script>
import PriceWithDiscountSmall from '@@/PriceWithDiscountSmall'
import InfoBadge from '@@/InfoBadge'
import ColorDisplay from '@@/ColorDisplay'

export default {
  components: {
    PriceWithDiscountSmall,
    InfoBadge,
    ColorDisplay
  },
  props: {
    title: { type: String, default: '' },
    url: { type: String, default: '#' },
    image: { type: String, default: '' },
    fullPrice: { type: Number, default: 0 },
    avaliableDiscount: { type: Number, default: 0 },
    sizes: { type: Array, default: () => [] },
    colors: { type: Array, default: () => [] }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.carousel-item
  display flex
  flex-direction column
  align-items center
  max-width 20em
  margin-right 4.7em
  &:hover &__title
    color $line-special-3
  &__image
    background-color $white
    background-repeat no-repeat
    background-size cover
    background-position center
    margin-bottom 1.2em
    min-height 20em
    min-width 20em
  &__price
    margin-bottom 1em
  &__title
    font-size 1.4em
    line-height 2rem
    margin-bottom 1rem
    color $line-core
    text-align center
    width 100%
    transition color .1s
    text-decoration none
  &__sizes
    margin-bottom 1em
</style>

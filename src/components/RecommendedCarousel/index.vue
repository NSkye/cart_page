<template>
  <div class="recommended-carousel">
    <div class='recommended-carousel__forward' v-on:click='handleForward' />
    <div class='recommended-carousel__backward' v-on:click='handleBackward' />
    <div ref='container' class="recommended-carousel__container">
      <CarouselItem
        v-for='(item, i) in items'
        v-bind:key='i'
        class="recommended-carousel__item"
        :title='item.title'
        :image='item.image'
        :url='item.url'
        :full-price='item.fullPrice'
        :avaliable-discount='item.avaliableDiscount'
        :sizes='item.sizes'
        :colors='item.colors'
      />
    </div>
  </div>
</template>

<script>
import MOCK_ITEMS from './MOCK_ITEMS'
import CarouselItem from '@@/CarouselItem'
import touchScroll from '@/libs/touchEvents'
import scroll from '@/libs/scrollContainer'
import wheelScroll from '@/libs/wheelScroll'
import cursorScroll from '@/libs/cursorScroll'

export default {
  components: {
    CarouselItem
  },
  data () {
    return {
      items: MOCK_ITEMS,
      position: 0
    }
  },
  mounted () {
    const container = this.$refs.container
    touchScroll(container, container)
    wheelScroll(container)
    cursorScroll(container)
  },
  methods: {
    handleForward () {
      const container = this.$refs.container

      this.position += container.clientWidth
      if (this.position > container.scrollWidth - container.clientWidth) {
        this.position = container.scrollWidth - container.clientWidth
      }
      scroll(container, this.position, 247)
    },
    handleBackward () {
      const container = this.$refs.container

      this.position -= container.clientWidth
      if (this.position < 0) {
        this.position = 0
      }
      scroll(container, this.position, 247)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.recommended-carousel
  width 100%
  box-sizing border-box
  padding 0 2.5em
  position relative
  height auto
  &__container
    width 100%
    height auto
    display flex
    overflow-x hidden
    overflow-y hidden
  &__forward, &__backward
    position absolute
    width 3.5rem
    height 3.5rem
    cursor pointer
    top 10em
    background-color $line-accent
    background-image url('~@/assets/icon-buttons-slider-left.svg')
    background-size cover
    background-repeat no-repeat
    background-position center
  &__forward
    right 0
    transform translate(50%, -50%) scale(-1, 1)
    @media screen and (max-width $break-phone)
      transform translate(0, -50%) scale(-1, 1)
  &__backward
    left 0
    transform translate(-50%, -50%)
    @media screen and (max-width $break-phone)
      transform translate(0, -50%)
</style>

<template>
  <div class="image-display">
    <div
      class="image-display__item"
      v-for='image in imageEntries'
      v-bind:key='image[1]'
      v-bind:style='{ backgroundImage: `url(${image[1]})`}'
      role='img'
      v-bind="{ 'aria-label': image[0] }"
    />
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Object,
      default: () => ({
        image1: '#url1',
        image2: '#url2'
      })
    }
  },
  computed: {
    imageEntries: function () {
      return Object.entries(this.images)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.image-display
  display flex
  height 10em
  &__item
    position relative
    background-color $background-core
    background-repeat no-repeat
    background-size cover
    background-position center
    height 10em
    width 10em
    box-sizing border-box
    border 1px solid $line-lighter
    margin-right 3.4em
    &::after
      content '+'
      color $line-accent
      position absolute
      font-size 3em
      top 50%
      right 0
      transform translate(2.6rem, -50%)
    &:last-child
      margin-right 0
      &::after
        content ''
        display none
</style>

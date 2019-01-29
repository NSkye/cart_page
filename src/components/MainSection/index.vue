<template>
  <main class='main-section'>
    <SectionHeading
      title='Вот что в вашей корзине'
      control-title='Очистить корзину'
      control-type='danger'
      @clicked='clearCart'
    />
  </main>
</template>

<script>
import SectionHeading from '@@/SectionHeading'

export default {
  components: {
    SectionHeading
  },
  methods: {
    clearCart () {
      console.log('clearing cart...')
    }
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
</style>

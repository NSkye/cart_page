<template>
  <span class='item-info'>
    <span v-if='title' class='item-info__title'>{{ title }}</span>
    <InfoBadge v-if='type==="text"' class='item-info__icon' :text='data' />
    <ColorDisplay v-if='type==="color"' class='item-info__icon' :color='data' />
  </span>
</template>

<script>
import InfoBadge from '@@/InfoBadge'
import ColorDisplay from '@@/ColorDisplay'

export default {
  components: {
    InfoBadge,
    ColorDisplay
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    data: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.item-info
  max-height 2rem
  display flex
  align-items center
  &__title
    font-size 1.5em
    color $line-light
    margin-right .8em
  &__icon
    height 100%
    margin-right 1.1em
</style>

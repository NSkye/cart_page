<template>
  <span class='item-info'>
    <span v-if='title' class='item-info__title'>{{ title }}</span>
    <InfoBadge v-if='type==="text"' :text='data' />
    <ColorDisplay v-if='type==="color"' :color='data' />
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
  &__title
    line-height 3em
    font-size 1.5em
    color $line-light
    margin-right 1em
</style>

<template>
  <span class='region-display'>
    <i class='icon-location region-display__icon-left'/>
    <span class='region-display__label'>Регион доставки:</span>
    <span class='region-display__name'>
      {{ selectedRegionName }}
    </span>
    <i class='icon-dropdown region-display__icon-right'/>
  </span>
</template>

<script>
export default {
  props: {
    selectedRegionName: {
      type: String,
      default: 'не определен :('
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.region-display
  color $line-light
  transition color .1s
  cursor pointer
  display flex
  align-items center
  line-height 2em
  &:hover
    color $line-accent
  &__label
    margin-right .5em
  &__name
    font-weight 600
    color $line-accent
  &__icon-left
    font-size .75em
    padding-right .4em
  &__icon-right
    font-size .55em
    padding-left .4em
    transform translateY(5%)
</style>

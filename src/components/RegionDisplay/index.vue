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
  align-items flex-end
  line-height 2em
  &:hover
    color $line-accent
  &__label
    margin-right .5em
    font-size 1.4em
    @media screen and (max-width $break-tablet)
      display none
  &__name
    font-weight 600
    color $line-accent
    font-size 1.4em
  &__icon-left
    font-size 1em
    padding-right .4em
    align-self center
  &__icon-right
    font-size .8em
    padding-left .4em
    align-self center
</style>

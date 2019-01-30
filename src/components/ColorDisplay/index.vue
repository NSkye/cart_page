<template>
  <i class='icon-color color-display' v-bind:style='{ color }' />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#000000'
    }
  }
}
</script>

<style lang="stylus" scoped>
.color-display
  font-size 2em
</style>

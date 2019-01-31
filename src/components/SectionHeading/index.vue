<template>
  <h1 class='section-heading'>
    {{ title }}
    <span
      v-if='controlTitle'
      role='button'
      tabindex='0'
      aria-pressed=false
      class='section-heading__control'
      v-bind:class='{ [`section-heading__control--${controlType}`]: true }'
      v-on:click='handleClick'
    >
      {{ controlTitle }}
    </span>
  </h1>
</template>

<script>
/**
 * Контролирующий компонент, связывает со стором всё что находится внутри хэдера
 */

export default {
  props: {
    title: {
      type: String,
      default: 'Lorem ipsum'
    },
    controlTitle: {
      type: String,
      default: ''
    },
    controlType: {
      type: String,
      default: 'regular'
    }
  },
  methods: {
    handleClick: function () {
      return this.$emit('clicked')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.section-heading
  width 100%
  margin 60px 0
  line-height 3.8rem
  font-size 2.8rem
  font-weight 600
  color $line-core
  &__control
    transition color .1s
    cursor pointer
    font-size 1.8rem
    margin-left 3rem
    user-select none
    &:hover
      color $line-special-3
    &--regular
      color $line-special-3
    &--danger
      color $line-danger
    &--accent
      color $line-accent
</style>

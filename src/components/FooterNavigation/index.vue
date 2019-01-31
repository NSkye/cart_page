<template>
  <div class='footer-navigation'>
    <div class="footer-navigation__title">{{ title }}</div>
    <ul class='footer-navigation__list'>
      <li class='footer-navigation__item' v-for='(entry, i) in itemsEntries' v-bind:key='i'>
        <a v-bind:href='entry[1]' class='footer-navigation__link'>
          {{ entry[0] }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    itemsEntries: function () {
      return Object.entries(this.items)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.footer-navigation
  display flex
  flex-direction column
  justify-content space-between
  &__title
    font-size 1.6rem
    font-weight 600
    margin-bottom 1.9rem
    color $line-light
  &__list
    list-style none
    margin 0
    padding 0
    height 18rem
    display flex
    justify-content space-between
    flex-direction column
  &__link
    text-decoration none
    color $line-core
    font-size 1.6rem
    line-height 2rem
    transition color .1s
    &:hover
      color $line-accent
</style>

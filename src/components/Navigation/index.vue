<template>
  <nav class='navigation'>
    <ul class="navigation__list">
      <li v-for='item in navItems' v-bind:key='item[0]' class="navigation__item">
        <a v-bind:href='item[1]' class='navigation__link'>{{ item[0] }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
const navItems = [
  ['Коллекции', '#'],
  ['Как пополнить счет?', '#'],
  ['Поддержка', '#']
]

export default {
  data() {
    return {
      navItems
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.navigation
  height auto
  display block
  &__list
    list-style none
    margin 0
    padding 0
    height auto
    display flex
  &__item
    margin 0
  &__link
    color $line-light
    display block
    text-decoration none
    font-weight 600
    font-size 1.5em
    line-height 2em
    padding 0 1.3em
    transition color .1s
    &:hover
      color $line-accent
</style>



<template>
  <footer class='footer-section'>
    <div class="footer-section__navigations">
      <FooterNavigation
        title='Меню'
        :items='{
          "Категории": "#",
          "Коллекции": "#",
          "Брэнды": "#",
          "Что такое Frogogo?": "#",
          "Как пополнить счет?": "#",
          "Поддержка": "#",
        }'
      />
      <FooterNavigation
        title='Помощь'
        :items='{
          "О нас": "#",
          "Карьера": "#",
          "Поставщики": "#",
          "Партнерская программа": "#",
          "Конфиденциальность": "#",
          "Публичная оферта": "#",
        }'
      />
      <FooterInfo />
      <FooterContacts />
    </div>
    <div class='footer-section__advantages'>
      <a href="#">100% Cashback</a>
      <a href="#">Доставка</a>
      <a href="#">ВИП Статус</a>
      <a href="#">Как работает Frogogo</a>
    </div>
  </footer>
</template>

<script>
import FooterNavigation from '@@/FooterNavigation'
import FooterInfo from '@@/FooterInfo'
import FooterContacts from '@@/FooterContacts'

export default {
  components: {
    FooterNavigation,
    FooterInfo,
    FooterContacts
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.footer-section
  display flex
  flex-direction column
  padding 0 12.7rem
  width 100%
  box-sizing border-box
  background-color $background-darken
  @media screen and (max-width $break-phone)
    padding 0 16px
  &__navigations
    display flex
    flex-direction row
    width 100%
    justify-content space-between
    padding-bottom 4rem
    border-bottom 1px solid $line-border
    flex-wrap wrap
    & > *
      padding-top 6rem
  &__advantages
    display flex
    padding-bottom 4rem
    font-size 1.7rem
    font-weight 600
    color $line-light
    justify-content space-between
    flex-wrap wrap
    & > a
      padding-top 4rem
      text-decoration none
      color inherit
      transition color .1s
      &:hover
        color $line-special-3
</style>

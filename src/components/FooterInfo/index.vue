<template>
  <div class='footer-info'>
    <div class="footer-info__title">Способы оплаты</div>
    <div class='footer-info__body'>
      <span class='footer-info__cards'>
        <span class="footer-info__card"><img v-bind:src="masterCardLogo" alt="Mastercard"></span>
        <span class="footer-info__card"><img v-bind:src="mirLogo" alt="Mir"></span>
        <span class="footer-info__card"><img v-bind:src="visaLogo" alt="Visa"></span>
      </span>
      <span class="footer-info__text">
        Вы можете оплатить покупки наличными или банковской картой при получении заказа.<br><br>Либо оплатить заказ онлайн на сайте.
      </span>
    </div>
  </div>
</template>

<script>
import masterCardLogo from '@/assets/logo-footer-mastercard.svg'
import mirLogo from '@/assets/logo-footer-mir.svg'
import visaLogo from '@/assets/logo-footer-visa.svg'

export default {
  data () {
    return {
      masterCardLogo,
      mirLogo,
      visaLogo
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.footer-info
  display flex
  flex-direction column
  max-width 25rem
  justify-content space-between
  &__title
    font-size 1.6rem
    font-weight 600
    color $line-light
    margin-bottom 1.9rem
  &__body
    flex-grow 1
    display flex
    flex-direction column
    justify-content space-between
  &__cards
    display flex
    justify-content space-between
    margin-bottom 2.2rem
  &__text
    font-size 1.6rem
    color $line-core
    flex-grow 1
</style>

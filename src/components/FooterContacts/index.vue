<template>
  <div class='footer-contacts'>
    <div class="footer-contacts__title">Наши контакты</div>
    <div class='footer-contacts__contacts'>
      <span class='footer-contacts__contact'><i class='icon-phone footer-contacts__icon' />8 800 555 35 35</span>
      <span class='footer-contacts__contact'><i class='icon-mail footer-contacts__icon' />info@frogogo.ru</span>
    </div>
    <div class='footer-contacts__social'>
      <a href="#"><img v-bind:src="facebookIcon" alt="facebook"></a>
      <a href="#"><img v-bind:src="twitterIcon" alt="twitter"></a>
      <a href="#"><img v-bind:src="instagramIcon" alt="instagram"></a>
      <a href="#"><img v-bind:src="vkIcon" alt="vk"></a>
    </div>
  </div>
</template>

<script>
import facebookIcon from '@/assets/facebook.icon.svg'
import instagramIcon from '@/assets/instagram.icon.svg'
import twitterIcon from '@/assets/twitter.icon.svg'
import vkIcon from '@/assets/vk.icon.svg'

export default {
  data () {
    return {
      facebookIcon,
      instagramIcon,
      twitterIcon,
      vkIcon
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

.footer-contacts
  display flex
  flex-direction column
  justify-content space-between
  max-width 30rem
  &__title
    font-size 1.6rem
    font-weight 600
    margin-bottom 1.9rem
    color $line-light
  &__contacts
    display flex
    flex-direction column
    justify-content space-around
    margin-bottom 5rem
  &__contact
    font-size 1.8rem
    font-weight 600
    color $line-core
    margin-bottom 1.2rem
  &__icon
    margin-right 2.2rem
    font-size 2rem
    color $line-light
  &__social
    display flex
    justify-content space-between
</style>

<template>
  <header class='header'>
    <div class='header__contents'>
      <div class='header__secondary-row'>
        <RegionDisplay class='header__secondary-row-item' :selected-region-name='"Москва"' />
        <Promo class='header__secondary-row-item' />
        <GoldStatus class='header__secondary-row-item' />
        <Balance v-if='!isSmartphone' class='header__secondary-row-item' :amount='500' />
      </div>
      <div class='header__main-row'>
        <Logo class='header__main-row-item' />
        <Navigation class='header__main-row-item' />
        <Balance v-if='isSmartphone' class='header__main-row-item' :amount='500'/>
        <CartHeader class='header__main-row-item' :item-count='1' />
      </div>
    </div>
  </header>
</template>

<script src='./main'></script>

<style lang="stylus" scoped>
@import '~@/vars'

.header
  box-sizing border-box
  width 100%
  background $background-darken
  font-size 10px
  &__contents
    box-sizing border-box
    margin 0 auto
    max-width 1200px
    padding-top 22px
    padding-bottom 24px
    padding-left 16px
    padding-right 16px
    width 100%
  &__secondary-row
    display flex
    justify-content flex-end
    align-items center
    height 2.4em
    margin-bottom 3em
    @media screen and (max-width $break-phone)
      justify-content space-between
  &__secondary-row-item
    margin-right 3em
    &:first-child
      margin-right auto
    &:last-child
      margin-right 0
    &, &:first-child
      @media screen and (max-width $break-phone)
        margin 0
  &__main-row
    display flex
    justify-content space-between
    flex-wrap wrap
    align-items center
  &__main-row-item
    &:nth-child(2)
      @media screen and (max-width $break-phone)
        width 100%
        order 100
        display flex
        justify-content center
        margin-top 3em
</style>

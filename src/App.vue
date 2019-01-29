<template>
  <div class="app">
    <Header />
    <MainSection />
    <FooterSection />
  </div>
</template>

<script>
import Header from '@@/Header'
import MainSection from '@@/MainSection'
import FooterSection from '@@/FooterSection'

export default {
  components: {
    Header,
    MainSection,
    FooterSection
  }
}

</script>

<style lang="stylus" scoped>
.app
  display flex
  flex-direction column
  min-height 100vh
</style>

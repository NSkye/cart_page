<template>
  <div>
    <label class='discount-range-selector__label' for='discount'>Передвигая лягушку, выберите сколько рублей с личного счета вы хотите потратить</label>
    <div class="discount-range-selector__amounts">
      <span class='discount-range-selector__min'>
        {{ formattedMin }} <span class='discount-range-selector__currency' role='img' aria-label='рубль'>₽</span>
      </span>
      <span class='discount-range-selector__max'>
        {{ formattedMax }} <span class='discount-range-selector__currency' role='img' aria-label='рубль'>₽</span>
      </span>
    </div>
    <input
      name='discount'
      ref='slider'
      class='discount-range-selector__range'
      type="range"
      v-bind:min='min'
      v-bind:max='max'
      v-bind:style='{ backgroundSize: `${percentage}% 100%` }'
      v-on:input='handleInput'
      step='1'
    />
  </div>
</template>

<script>
import formatNumber from '@/libs/formatNumber'

export default {
  data () {
    return {
      value: null
    }
  },
  props: {
    min: { type: Number, default: 0 },
    max: { type: Number, default: 0 }
  },
  computed: {
    /**
     * Посчитать насколько процентов выставлен слайдер.
     * Нужно для того чтобы закрашивать только активную его часть.
     */
    percentage: function () {
      return this.value / this.max * 100
    },
    formattedMin: function () {
      return formatNumber(this.min)
    },
    formattedMax: function () {
      return formatNumber(this.max)
    }
  },
  methods: {
    /**
     * При передвижаении слайдера эмитит событие, чтобы его мог поднять умный компонент.
     */
    handleInput (input) {
      this.value = input.target.value
      this.$emit('update', this.value)
    }
  },
  /**
   * При маунтинге отправляет сигнал об апдейте.
   * Нужно для синхронизации слайдера и vuex-состояния.
   */
  mounted () {
    this.$refs.slider.value = this.max
    this.value = this.max
    this.$emit('update', this.value)
  },
  /**
   * Позволяет сохранить значение слайдера при изменении максимального значения
   * А так же производит дополнительную синхронизацию со стором
   */
  updated () {
    const oldValue = this.value <= this.max
      ? this.value
      : this.max

    this.$refs.slider.value = oldValue
    this.$emit('update', oldValue)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/vars'

thumb-style()
  height 3.6em
  width 3.6em
  border-radius 50%
  cursor pointer
  background-color $line-accent
  border-color $line-accent
  box-sizing border-box
  background-image url('~@/assets/slider-knob.svg')
  background-size cover
  background-position center
  background-repeat no-repeat

.discount-range-selector
  &__label
    display block
    margin-bottom 2.8rem
    font-size 1.8rem
    max-width 55.6rem
    color $line-core
  &__amounts
    width 100%
    display flex
    justify-content space-between
    line-height 2.7em
    margin-bottom 1.5em
  &__min, &__max
    font-size 2em
    font-weight bold
    color $line-lighter
  &__range
    -webkit-appearance none
    width 100%
    background transparent
    background-color $line-border
    background-image linear-gradient($line-accent, $line-accent)
    background-repeat no-repeat
    height .5em
    border-radius .5em
    &:focus
      outline none
    &::-ms-track
      width 100%
      cursor pointer
      background transparent
      border-color transparent
      color transparent
    &::-webkit-slider-thumb
      -webkit-appearance none
      margin-top 0
      thumb-style()
    &::-moz-range-thumb
      thumb-style()
    &::-ms-thumb
      thumb-style()
</style>

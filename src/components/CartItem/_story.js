import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import CartItem from '@@/CartItem'
import { withKnobs, text, object, boolean, number } from '@storybook/addon-knobs'

Vue.component('cart-item', CartItem)

const stories = storiesOf('CartItem', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { CartItem },
    props: {
      title: {
        type: String,
        default: text('title', 'Потрясающий плейсхолдер размером 100x100 и 50x50 в подарок')
      },
      images: {
        type: Object,
        default: object('images', { 'placeholder1': 'https://via.placeholder.com/100', 'placeholder2': 'https://via.placeholder.com/50' })
      },
      quantity: {
        type: Number,
        default: number('quantity', 1, { range: true, min: 1, max: 99 })
      },
      quantityAdjust: {
        type: Boolean,
        default: boolean('quantity-adjust', true)
      },
      color: {
        type: String,
        default: text('color', 'red')
      },
      size: {
        type: String,
        default: text('size', '100x100')
      },
      fullPrice: {
        type: Number,
        default: number('full-price', 100)
      },
      avaliableDiscount: {
        type: Number,
        default: number('avaliable-discount', 90)
      },
      minimalDiscount: {
        type: Number,
        default: number('minimal-discount', 50)
      },
      isGift: {
        type: Boolean,
        default: boolean('is-gift', false)
      }
    },
    template: `
      <div style="max-width: 740px; width: 100%;">
        <cart-item 
          :title="title"
          :images="images"
          :quantity="quantity"
          :quantity-adjust="quantityAdjust"
          :color="color"
          :size="size"
          :full-price="fullPrice"
          :avaliable-discount="avaliableDiscount"
          :minimal-discount="minimalDiscount"
          :is-gift="isGift"
        />
      </div>`
  }))

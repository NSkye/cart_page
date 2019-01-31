import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import PriceWithDiscountSmall from '@@/PriceWithDiscountSmall'
import { withKnobs, number } from '@storybook/addon-knobs'

Vue.component('price-with-discount-small', PriceWithDiscountSmall)

const stories = storiesOf('PriceWithDiscountSmall', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { PriceWithDiscountSmall },
    props: {
      fullPrice: {
        type: Number,
        default: number('full-price', 799, {
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      },
      avaliableDiscount: {
        type: Number,
        default: number('avaliable-discount', 349, {
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      }
    },
    template: `
      <price-with-discount-small
        :full-price='fullPrice'
        :avaliable-discount='avaliableDiscount'
      />
    `
  }))

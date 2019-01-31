import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import CartItemsSummary from '@@/CartItemsSummary'
import { withKnobs, number } from '@storybook/addon-knobs'

Vue.component('cart-item-summary', CartItemsSummary)

const stories = storiesOf('CartItemsSummary', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { CartItemsSummary },
    props: {
      itemsCount: {
        type: Number,
        default: number('items-count', 3, {
          range: true,
          min: 0,
          max: 99,
          step: 1
        })
      },
      totalCost: {
        type: Number,
        default: number('total-cost', 3000, {
          min: 0,
          max: Number.MAX_SAFE_INTEGER,
          step: 1
        })
      },
      discount: {
        type: Number,
        default: number('discount', 900, {
          min: 0,
          max: Number.MAX_SAFE_INTEGER,
          step: 1
        })
      }
    },
    template: `
      <div style="max-width: 740px; width: 100%;">
        <cart-item-summary
          :items-count="itemsCount"
          :total-cost="totalCost"
          :discount="discount"
        />
      </div>
    `
  }))

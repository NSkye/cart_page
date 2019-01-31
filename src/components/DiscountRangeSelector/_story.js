import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import DiscountRangeSelector from '@@/DiscountRangeSelector'
import { withKnobs, number } from '@storybook/addon-knobs'

Vue.component('discount-range-selector', DiscountRangeSelector)

const stories = storiesOf('DiscountRangeSelector', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { DiscountRangeSelector },
    props: {
      min: {
        type: Number,
        default: number('min', 0, {
          range: false,
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      },
      max: {
        type: Number,
        default: number('max', 500, {
          range: false,
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      }
    },
    template: '<DiscountRangeSelector :min="min" :max="max" />'
  }))
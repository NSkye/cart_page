import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import PriceDisplay from '@@/PriceDisplay'
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs'

Vue.component('pice-display', PriceDisplay)

const stories = storiesOf('PriceDisplay', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { PriceDisplay },
    props: {
      title: {
        type: String,
        default: text('title', 'Полная цена')
      },
      value: {
        type: Number,
        default: number('value', 500, {
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      },
      type: {
        type: String,
        default: select('type', {
          itermediate: 'intermediate',
          total: 'total'
        }, 'intermediate')
      },
      color: {
        type: String,
        default: select('color', {
          regular: 'regular',
          accent: 'accent',
          gold: 'gold'
        }, 'regular')
      },
      isFree: {
        type: Boolean,
        default: boolean('isFree', false)
      }
    },
    template: `
      <div style="max-width: 740px; width: 100%;">
        <pice-display
          :title="title" 
          :value="value" 
          :type="type" 
          :color="color"
          :is-free="isFree"
        />
      </div>
    `
  }))

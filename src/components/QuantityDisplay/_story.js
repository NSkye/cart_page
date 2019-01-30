import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import QuantityDisplay from '@@/QuantityDisplay'
import { withKnobs, number } from '@storybook/addon-knobs'

Vue.component('quantity-display', QuantityDisplay)

const stories = storiesOf('QuantityDisplay', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { QuantityDisplay },
    props: {
      value: {
        type: Number,
        default: number('value', 1, {
          range: true,
          max: 99,
          min: 1,
          step: 1
        })
      }
    },
    template: '<QuantityDisplay :value="value" />'
  }))

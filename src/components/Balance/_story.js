import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Balance from '@@/Balance'
import { withKnobs, number } from '@storybook/addon-knobs'

Vue.component('balance', Balance)

const stories = storiesOf('Balance', module);
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { Balance },
    props: {
      amount: {
        type: Number,
        default: number(':amount', 500, {
          range: false,
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      }
    },
    template: '<Balance :amount="amount" />'
  }));
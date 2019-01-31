import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import AllTotal from '@@/AllTotal'
import { withKnobs, number } from '@storybook/addon-knobs'

Vue.component('all-total', AllTotal)

const stories = storiesOf('AllTotal', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { AllTotal },
    props: {
      shipping: {
        type: Number,
        default: number('shipping', 0, {
          range: false,
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      },
      total: {
        type: Number,
        default: number('total', 0, {
          range: false,
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      },
      bonusPercents: {
        type: Number,
        default: number('bonus-percents', 0, {
          range: false,
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      },
      bonusMoney: {
        type: Number,
        default: number('bonus-money', 0, {
          range: false,
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      },
      cashBack: {
        type: Number,
        default: number('cash-back', 0, {
          range: false,
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      }
    },
    template: `
      <AllTotal
        :shipping='shipping'
        :total='total'
        :bonus-percents='bonusPercents'
        :bonus-money='bonusMoney'
        :cash-back='cashBack'
      />
    `
  }))
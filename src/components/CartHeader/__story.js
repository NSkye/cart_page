import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import CartHeader from '@@/CartHeader'
import { withKnobs, number } from '@storybook/addon-knobs'

Vue.component('header-cart', CartHeader)

const stories = storiesOf('CartHeader', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { CartHeader },
    props: {
      count: {
        type: Number,
        default: number(':item-count', 0, {
          range: true,
          min: 0,
          max: 99,
          step: 1
        })
      }
    },
    template: '<CartHeader :item-count="count" />'
  }))

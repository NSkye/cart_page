import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import CartItem from '@@/CartItem'
import { withKnobs, text } from '@storybook/addon-knobs'

Vue.component('cart-item', CartItem)

const stories = storiesOf('CartItem', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { CartItem },
    props: {
      title: {
        type: String,
        default: text('title', 'Стакан YPSILON BRIO CAPPUCCINO 220 мл')
      }
    },
    template: '<div style="max-width: 740px; width: 100%;"><cart-item :title="title"/></div>'
  }))

import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import ItemInfo from '@@/ItemInfo'
import { withKnobs, text, select } from '@storybook/addon-knobs'

Vue.component('item-info', ItemInfo)

const stories = storiesOf('ItemInfo', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { ItemInfo },
    props: {
      data: {
        type: String,
        default: text('data', 'red')
      },
      type: {
        type: String,
        default: select('type', {
          color: 'color',
          text: 'text'
        }, 'text')
      },
      title: {
        type: String,
        default: text('title', 'Цвет')
      }
    },
    template: '<ItemInfo :data="data" :title="title" :type="type" />'
  }))

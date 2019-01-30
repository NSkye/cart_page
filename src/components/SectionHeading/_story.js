import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import SectionHeading from '@@/SectionHeading'
import { withKnobs, text, select } from '@storybook/addon-knobs'

Vue.component('section-heading', SectionHeading)

const stories = storiesOf('SectionHeading', module)
stories.addDecorator(withKnobs)

stories
  .add('component', () => '<div><section-heading title="Вот что в вашей корзине" control-title="Очистить корзину" control-type="danger"/></div>')
  .add('with knobs', () => ({
    components: { SectionHeading },
    props: {
      title: {
        type: String,
        default: text('title', 'Вот что в вашей корзине')
      },
      controlTitle: {
        type: String,
        default: text('control-title', 'Очистить корзину')
      },
      controlType: {
        type: String,
        default: select('control-type', {
          regular: 'regular',
          accent: 'accent',
          danger: 'danger'
        }, 'regular')
      }
    },
    template: '<SectionHeading :title="title" :control-title="controlTitle" :control-type="controlType" />'
  }))

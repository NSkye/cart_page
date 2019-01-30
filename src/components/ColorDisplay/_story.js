import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import ColorDisplay from '@@/ColorDisplay'
import { withKnobs, color } from '@storybook/addon-knobs'

Vue.component('color-display', ColorDisplay)

const stories = storiesOf('ColorDisplay', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { ColorDisplay },
    props: {
      color: {
        type: String,
        default: color('color', 'teal')
      }
    },
    template: '<ColorDisplay :color="color" />'
  }))

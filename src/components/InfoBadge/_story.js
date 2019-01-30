import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import InfoBadge from '@@/InfoBadge'
import { withKnobs, text } from '@storybook/addon-knobs'

Vue.component('info-badge', InfoBadge)

const stories = storiesOf('InfoBadge', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { InfoBadge },
    props: {
      text: {
        type: String,
        default: text('text', '170x200')
      }
    },
    template: '<InfoBadge :text="text" />'
  }))

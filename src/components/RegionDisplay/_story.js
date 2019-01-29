import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import RegionDisplay from '@@/RegionDisplay'
import { withKnobs, text } from '@storybook/addon-knobs'

Vue.component('region-display', RegionDisplay)

const stories = storiesOf('RegionDisplay', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { RegionDisplay },
    props: {
      regionName: {
        type: String,
        default: text(':amount', 'Москва')
      }
    },
    template: '<RegionDisplay :selected-region-name="regionName" />'
  }))

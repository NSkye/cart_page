import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import ImageDisplay from '@@/ImageDisplay'
import { withKnobs, object } from '@storybook/addon-knobs'

Vue.component('image-display', ImageDisplay)

const stories = storiesOf('ImageDisplay', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { ImageDisplay },
    props: {
      images: {
        type: Object,
        default: object('images', {
          'Сумка с удлиненными ручками': 'https://cdn.zeplin.io/5c40778e3d841037a35a2389/assets/24C0E090-329E-42A9-9627-1132B73E27B7.png',
          'Зонт-трость SwissOak': 'https://cdn.zeplin.io/5c40778e3d841037a35a2389/assets/9D7DC7EE-A649-458A-B994-BDBA403BBE12.png'
        })
      }
    },
    template: '<ImageDisplay :images="images" />'
  }))

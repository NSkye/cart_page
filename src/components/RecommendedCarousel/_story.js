import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import RecommendedCarousel from '@@/RecommendedCarousel'

Vue.component('recommended-carousel', RecommendedCarousel)

const stories = storiesOf('RecommendedCarousel', module)

stories
  .add('component', () => ({
    components: { RecommendedCarousel },

    template: `
      <div style="max-width: 740px; width: 100%;">
        <recommended-carousel />
      </div>
    `
  }))

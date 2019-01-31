import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import CarouselItem from '@@/CarouselItem'
import { withKnobs, number, text, array } from '@storybook/addon-knobs'

Vue.component('carousel-item', CarouselItem)

const stories = storiesOf('CarouselItem', module)
stories.addDecorator(withKnobs)

stories
  .add('with knobs', () => ({
    components: { CarouselItem },
    props: {
      title: {
        type: String,
        default: text('title', 'Многофункциональный плейсхолдер 200x200')
      },
      image: {
        type: String,
        default: text('image', 'https://via.placeholder.com/200')
      },
      url: {
        type: String,
        default: text('url', '#')
      },
      colors: {
        type: Array,
        default: array('colors', [ 'red', 'green', 'blue' ])
      },
      sizes: {
        type: Array,
        default: array('sizes', [ '200x200' ])
      },
      fullPrice: {
        type: Number,
        default: number('full-price', 799, {
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      },
      avaliableDiscount: {
        type: Number,
        default: number('avaliable-discount', 349, {
          max: Number.MAX_SAFE_INTEGER,
          min: 0,
          step: 1
        })
      }
    },
    template: `
      <carousel-item
        :title='title'
        :image='image'
        :url='url'
        :full-price='fullPrice'
        :avaliable-discount='avaliableDiscount'
        :sizes='sizes'
        :colors='colors'
      />
    `
  }))

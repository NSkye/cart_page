import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Promo from '@@/Promo'

Vue.component('promo', Promo)

storiesOf('Promo', module)
  .add('component', () => '<div><promo/></div>')
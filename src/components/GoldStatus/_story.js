import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import GoldStatus from '@@/GoldStatus'

Vue.component('gold-status', GoldStatus)

storiesOf('GoldStatus', module)
  .add('component', () => '<div><gold-status/></div>')
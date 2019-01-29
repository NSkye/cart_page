import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Navigation from '@@/Navigation'

Vue.component('navi', Navigation)

storiesOf('Navigation', module)
  .add('component', () => '<div><navi/></div>')

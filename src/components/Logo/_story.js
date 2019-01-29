import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Logo from '@@/Logo'

Vue.component('logo', Logo)

storiesOf('Logo', module)
  .add('component', () => '<div><logo/></div>')

import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Header from '@@/Header'

Vue.component('c-header', Header)

storiesOf('Header', module)
  .add('header', () => '<div><c-header/></div>')

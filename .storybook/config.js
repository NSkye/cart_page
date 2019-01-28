import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex';

import Header from '../src/components/Header'

Vue.use(Vuex);
Vue.component('Header', Header);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src/components', true, /_story\.js$/));
}

configure(loadStories, module);
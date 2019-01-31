import { configure } from '@storybook/vue';
import '@/fonts/open-sans/stylesheet.css';
import '@/fonts/roboto-numbers-only/stylesheet.css';
import '@/fonts/icons/stylesheet.css';
import './styles.css';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src/components', true, /_story\.js$/));
}

configure(loadStories, module);
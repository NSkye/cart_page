import { configure } from '@storybook/vue';
import './styles.css'

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src/components', true, /_story\.(js)|(vue)$/));
}

configure(loadStories, module);
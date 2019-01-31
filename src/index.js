import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import 'normalize.css'
import '@/fonts/open-sans/stylesheet.css'
import '@/fonts/icons/stylesheet.css'
import '@/index.css'

// eslint-disable-next-line
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

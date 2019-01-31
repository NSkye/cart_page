import Vue from 'vue'
import Vuex from 'vuex'

import * as mutations from './mutations'
import * as getters from './getters'

import DEMO_STATE from './DEMO_STATE'

Vue.use(Vuex)

export default new Vuex.Store({
  state: DEMO_STATE,
  mutations,
  getters
})

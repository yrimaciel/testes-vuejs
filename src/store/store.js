import Vue from 'vue'
import Vuex from 'vuex'

import vagaModule from './modules/vagaModule'
import clientModule from './modules/clientModule'
import contentModule from './modules/contentModule'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vagaModule,
    clientModule,
    contentModule
  }
})
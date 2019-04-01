import Vue from 'vue'
import Vuex from 'vuex'
import dragTable from './modules/drag.js'
import cashFlow from './modules/cashFlow.js'
import modal from './modules/modal.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dragTable,
    cashFlow,
    modal
  }
})

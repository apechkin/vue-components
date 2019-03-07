import Vue from 'vue'
import Vuex from 'vuex'
import dragTable from './modules/dragTable.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dragTable
  }
})

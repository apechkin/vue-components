import Vue from 'vue'
import Vuex from 'vuex'
import dragTable from './modules/dragTable.js'
import calendar from './modules/calendar.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dragTable,
    calendar
  }
})

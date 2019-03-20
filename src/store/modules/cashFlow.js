import clientData from '~/fixture/clientData.js'
import costItems from '~/fixture/costItems.js'
import {
  analize,
  analizeEstimate,
  initWeekCalendar,
  minMaxDate,
  nextWeek
} from '~/helpers/calendar.js'
import {
  mapIncomeToDate,
  mapEstToDate,
  mapEstToClient
} from '~/helpers/mapper.js'

const state = {
  calendar: [],
  formClient: [],
  estimates: [],
  scroll: 0,
  isLoading: false,
  error: null,
  wCalendar: null,
  gCalendar: {
    weeks: null,
    months: null,
    years: null
  }
}

const mutations = {
  START_LOADING (state) {
    state.isLoading = true
  },
  FINISH (state) {
    state.isLoading = false
  },
  FAILURE (state, payload) {
    state.isLoading = false
    state.error = payload
  },
  SAVE_CLIENT_DATA (state, payload) {
    state.formClient = payload
  },
  SAVE_COST_ITEMS (state, payload) {
    state.estimates = payload
  },
  SAVE_WEEK_CALENDAR (state, { wCalendar, data }) {
    state.gCalendar['weeks'] = data
    state.wCalendar = wCalendar
  },
  SET_LAST_WEEKDAY (state, payload) {
    state.wCalendar['lastWeekDay'] = payload
  },
  ADD_NEXT_WEEKS (state, payload) {
    state.gCalendar['weeks'] = state.gCalendar['weeks'].concat(payload)
  }
}

const actions = {
  addNextDates ({ commit, state }, id) {
    let next = null
    switch (id) {
      case 'weeks':
        next = nextWeek(state.wCalendar)
        commit('SET_LAST_WEEKDAY', next[0]['lastWeekDay'])
        process.nextTick(commit('ADD_NEXT_WEEKS', next))
        break
      default:
        break
    }
  },
  async clientEstimate ({ dispatch, commit }, { id }) {
    try {
      commit('START_LOADING')
      const client = await clientData()
      commit('SAVE_CLIENT_DATA', client)
      const estimate = await costItems()
      commit('SAVE_COST_ITEMS', estimate)
      dispatch('initCalendar', id)
      commit('FINISH')
    } catch (error) {
      commit('FAILURE', error)
    }
  },
  initCalendar ({ commit, state }, id) {
    const { minDate: minDateClient, maxDate: maxDateClient } = analize(state.formClient, id)
    const { minDate: minDateEst, maxDate: maxDateEst } = analizeEstimate(state.estimates, id)
    const { min, max } = minMaxDate([minDateClient, minDateEst, maxDateClient, maxDateEst])
    switch (id) {
      case 'weeks':
        commit('SAVE_WEEK_CALENDAR', initWeekCalendar(min, max))
        break
      default:
        break
    }
  },
  async initFromClient ({ commit }) {
    try {
      commit('START_LOADING')
      const data = await clientData()
      commit('SAVE_CLIENT_DATA', data)
      commit('FINISH')
    } catch (error) {
      commit('FAILURE', error)
    }
  },
  async initEstimate ({ commit }) {
    try {
      commit('START_LOADING')
      const data = await costItems()
      commit('SAVE_COST_ITEMS', data)
      commit('FINISH')
    } catch (error) {
      commit('FAILURE', error)
    }
  }
}

const getters = {
  calendarByType: state => id => {
    return state.gCalendar[id]
  },
  incomeByType: state => id => {
    return mapIncomeToDate(state.gCalendar[id], state.formClient, id)
  },
  computeEstimate: state => id => {
    return mapEstToDate(state.gCalendar[id], state.estimates, id)
  },
  computeCashFlow: (state, getters) => id => {
    return mapEstToClient(getters.incomeByType(id), getters.computeEstimate(id))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
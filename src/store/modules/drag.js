const state = {
  dragFrom: null,
  dragTo: null
}
const mutations = {
  SAVE_DRAG_START (state, payload) {
    state.dragFrom = payload
  },
  SAVE_DRAG_ENTER (state, payload) {
    state.dragTo = payload
  }
}
const actions = {
  dragStart ({ commit }, payload) {
    const { data, id } = payload
    const dragFrom = {
      id,
      fullDate: data.fullDate,
      total: data.total
    }
    commit('SAVE_DRAG_START', dragFrom)
  },
  dragEnter ({ commit }, payload) {
    const { data, id } = payload
    const dragFrom = {
      id,
      fullDate: data.fullDate,
      total: data.total
    }
    commit('SAVE_DRAG_ENTER', dragFrom)
  }
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

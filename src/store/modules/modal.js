const state = {
  isOpen: false,
  component: null,
  props: null
}

const actions = {
  openModal ({ commit }, { component, props }) {
    commit('OPEN_MODAL', { component, props })
  },
  closeModal ({ commit }) {
    commit('CLOSE_MODAL')
  }
}

const mutations = {
  OPEN_MODAL (state, { component, props }) {
    state.isOpen = true
    state.component = component
    state.props = props
  },
  CLOSE_MODAL (state) {
    state.isOpen = false
    state.component = null
    state.props = null
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

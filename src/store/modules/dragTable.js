export default {
  state: {
    fromEst: null,
    toEst: null
  },
  mutations: {
    setFromEst (state, payload) {
      state.fromEst = payload
    },
    setToEst (state, payload) {
      state.toEst = payload
    },
    resetState (state) {
      state.fromEst = null
      state.toEst = null
    }
  },
  getters: {
    getFrom: state => {
      return state.fromEst
    },
    getTo: state => {
      return state.toEst
    }
  }
}

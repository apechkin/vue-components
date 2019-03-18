export default {
  state: {
    isLoading: false,
    scroll: 0
  },
  mutations: {
    setLoading (state, payload) {
      state.isLoading = payload
    },
    setScroll (state, payload) {
      state.scroll = payload
    },
    resetLoading (state) {
      state.isLoading = false
    }
  }
}

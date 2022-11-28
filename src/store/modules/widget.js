export default {
  namespaced: true,

  state: {
    params: {},
  },

  getters: {
    params(state) {
      return state.params;
    }
  },

  actions: {
    async setParams({ commit }, { params, }) {
      commit('updateParams', params);
    },
  },

  mutations: {
    updateParams(state, params) {
      state.params = params;
    },
  },
}
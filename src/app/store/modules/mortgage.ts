export default {
  namespaced: true,

  state: {
    id: null,
  },

  getters: {
    id(state) {
      return state.id;
    }
  },

  actions: {
    async fetch({ commit }, { params, }) {
      commit('updateId', params);
    },
  },

  mutations: {
    updateId(state, params) {
      state.params = params;
    },
  },
}
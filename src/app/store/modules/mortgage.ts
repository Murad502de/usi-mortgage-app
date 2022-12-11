import { fetchMortgages } from '@/app/api/mortgageApi/fetchMortgages';

export default {
  namespaced: true,

  state: {
    list: [],
  },

  getters: {
    list(state) {
      return state.list;
    }
  },

  actions: {
    async fetchList({ commit }) {
      console.debug('vuex[mortgage]::fetchList'); //DELETE

      const list: Array<any> = await fetchMortgages();

      // commit('updateList', list);

      return list;
    },
  },

  mutations: {
    updateList(state, list) {
      state.list = list;
    },
  },
}
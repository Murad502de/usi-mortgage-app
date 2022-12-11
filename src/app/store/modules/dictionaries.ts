import { fetchUsersDictionary } from '@/app/api/dictionariesApi/fetchUsersDictionary';
import { fetchLeadPipelinesDictionary } from '@/app/api/dictionariesApi/fetchLeadPipelinesDictionary';

export default {
  namespaced: true,

  state: {
    users: [],
    pipelines: [],
  },

  getters: {
    users(state) {
      return state.users;
    },
    pipelines(state) {
      return state.pipelines;
    },
  },

  actions: {
    async fetchUsers({ commit }) {
      console.debug('vuex::fetchUsers'); //DELETE

      const users: Array<any> = await fetchUsersDictionary();;

      commit('updateUsers', users);
    },
    async fetchPipelines({ commit }) {
      console.debug('vuex::fetchPipelines'); //DELETE

      const pipelines: Array<any> = await fetchLeadPipelinesDictionary();

      commit('updatePipelines', pipelines);
    },
  },

  mutations: {
    updateUsers(state, users) {
      console.debug('vuex::updateUsers', users); //DELETE

      state.users = users;
    },
    updatePipelines(state, pipelines) {
      console.debug('vuex::updatePipelines', pipelines); //DELETE

      state.pipelines = pipelines;
    },
  },
}
import { fetchMortgages } from '@/app/api/mortgageApi/fetchMortgages';

export default {
  namespaced: true,

  state: {
    list: [],
  },

  getters: {
    list(state) {
      return state.list;
    },
  },

  actions: {
    /* ACTIONS */
    async fetchList({ commit }) {
      console.debug('vuex[mortgage]::fetchList'); //DELETE

      const list: Array<any> = await fetchMortgages();

      commit('updateList', list);

      return list;
    },
    /* FIXME: it is recommended to implement one generic method with setAfterApplyingStages */
    async setBeforeApplyingStages({ commit, getters }, { uuid, stages, }) {
      // console.debug('vuex[mortgage]::setBeforeApplyingStages', { uuid, stages, }, getters.list); //DELETE

      const mortgages = getters.list.map(mortgage => {
        if (mortgage.uuid === uuid) {
          return {
            ...mortgage,
            amo_mortgage_before_applying_stage_ids: [...stages],
            amo_mortgage_after_applying_stage_ids: [
              ...mortgage.amo_mortgage_after_applying_stage_ids
            ],
            pipelines: [
              ...mortgage.pipelines
            ],
          };
        }

        return {
          ...mortgage,
          amo_mortgage_after_applying_stage_ids: [
            ...mortgage.amo_mortgage_after_applying_stage_ids
          ],
          amo_mortgage_before_applying_stage_ids: [
            ...mortgage.amo_mortgage_before_applying_stage_ids
          ],
          pipelines: [
            ...mortgage.pipelines
          ],
        };
      });

      commit('updateList', mortgages);

      return;
    },
    /* FIXME: it is recommended to implement one generic method with setBeforeApplyingStages */
    async setAfterApplyingStages({ commit, getters }, { uuid, stages, }) {
      // console.debug('vuex[mortgage]::setAfterApplyingStages', { uuid, stages, }, getters.list); //DELETE

      const mortgages = getters.list.map(mortgage => {
        if (mortgage.uuid === uuid) {
          return {
            ...mortgage,
            amo_mortgage_after_applying_stage_ids: [...stages],
            amo_mortgage_before_applying_stage_ids: [
              ...mortgage.amo_mortgage_before_applying_stage_ids
            ],
            pipelines: [
              ...mortgage.pipelines
            ],
          };
        }

        return {
          ...mortgage,
          amo_mortgage_after_applying_stage_ids: [
            ...mortgage.amo_mortgage_after_applying_stage_ids
          ],
          amo_mortgage_before_applying_stage_ids: [
            ...mortgage.amo_mortgage_before_applying_stage_ids
          ],
          pipelines: [
            ...mortgage.pipelines
          ],
        };
      });

      commit('updateList', mortgages);

      return;
    },
  },

  mutations: {
    updateList(state, list) {
      console.debug('vuex[mortgage]::updateList', list); //DELETE

      state.list = list;
    },
  },
}
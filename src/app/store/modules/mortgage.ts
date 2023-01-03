import { fetchMortgages } from '@/app/api/mortgageApi/fetchMortgages';

export default {
  namespaced: true,

  state: {
    changed: false,
    listNode: [],
    list: [],
    addPipelines: [],
    updatePipelines: [],
    deletePipelines: [],
  },

  getters: {
    changed(state) {
      return state.changed;
    },
    listNode(state) {
      return state.listNode;
    },
    list(state) {
      return state.list;
    },
    addPipelines(state) {
      return state.addPipelines;
    },
    updatePipelines(state) {
      return state.updatePipelines;
    },
    deletePipelines(state) {
      return state.deletePipelines;
    },
  },

  actions: {
    /* ACTIONS */
    async reset({ commit, getters, dispatch, }) {
      console.debug('store/mortgage/actions/reset/listNode', getters.listNode); //DELETE
      console.debug('store/mortgage/actions/reset/list', getters.list); //DELETE

      commit('updateList', getters.listNode);
      commit('updateAddPipelines', []);
      commit('updateUpdatePipelines', []);
      commit('updateDeletePipelines', []);
      dispatch('setChangeStatus', false);

      return;
    },
    async save({ commit, getters, dispatch, }) {
      console.debug('store/mortgage/actions/save/listNode', getters.listNode); //DELETE
      console.debug('store/mortgage/actions/save/list', getters.list); //DELETE

      commit('updateAddPipelines', []);
      commit('updateUpdatePipelines', []);
      commit('updateDeletePipelines', []);
      dispatch('setChangeStatus', false);

      return;
    },
    async fetchList({ commit }) {
      console.debug('vuex[mortgage]::fetchList'); //DELETE

      const list: Array<any> = await fetchMortgages();

      commit('updateListNode', list);
      commit('updateList', list);

      return list;
    },

    /* SETTERS */
    /* FIXME: it is recommended to implement one generic method with setAfterApplyingStages */
    async setBeforeApplyingStages({ commit, getters }, { uuid, stages, }) {
      console.debug('vuex/mortgage/setBeforeApplyingStages', { uuid, stages, }, getters.list); //DELETE

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
      console.debug('vuex/mortgage/setAfterApplyingStages', { uuid, stages, }, getters.list); //DELETE

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
    async setBrokers({ commit, getters }, { uuid, brokers, }) {
      console.debug('vuex/mortgage/setBrokers', { uuid, brokers, }); //DELETE

      const mortgages = getters.list.map(mortgage => {
        if (mortgage.uuid === uuid) {
          return {
            ...mortgage,
            brokers,
          };
        }

        return {
          ...mortgage,
        };
      });

      commit('updateList', mortgages);

      return;
    },

    async setMortgageList({ commit, dispatch }, mortgages) {
      console.debug('vuex/mortgage/setMortgageList', mortgages); //DELETE

      commit('updateList', mortgages);
      dispatch('setChangeStatus', true);
    },
    async setAddPipelines({ commit, getters, dispatch }, { uuid, pipelines, }) {
      console.debug('vuex/mortgage/setAddPipelines', { uuid, pipelines, }); //DELETE

      if (!pipelines.length) {
        commit('updateAddPipelines', getters.addPipelines.filter(
          addPipeline => addPipeline.uuid !== uuid
        ));
      } else {
        const pipeline = getters.addPipelines.find(addPipeline => addPipeline.uuid === uuid);

        if (pipeline) {
          commit('updateAddPipelines', [
            ...getters.addPipelines.map(addPipeline => {
              if (addPipeline.uuid === uuid) {
                return { uuid, pipelines, };
              }

              return addPipeline;
            })
          ]);
        } else {
          commit('updateAddPipelines', [
            ...getters.addPipelines,
            { uuid, pipelines, },
          ]);
        }
      }

      dispatch('setChangeStatus', true);
    },
    async replaceUuidInAddPipelines({ commit, getters, dispatch }, { newUuid, oldUuid, }) {
      console.debug('vuex/mortgage/replaceUuidInAddPipelines', { newUuid, oldUuid, }); //DELETE

      commit('updateAddPipelines', [
        ...getters.addPipelines.map(addPipeline => {
          if (addPipeline.uuid === oldUuid) {
            return {
              ...addPipeline,
              uuid: newUuid,
            };
          }

          return addPipeline;
        })
      ]);
    },
    async setUpdatePipelines({ commit, getters, dispatch }, { uuid, pipelines, }) {
      console.debug('vuex/mortgage/setUpdatePipelines', { uuid, pipelines, }); //DELETE

      if (!pipelines.length) {
        commit('updateUpdatePipelines', getters.updatePipelines.filter(
          updatePipeline => updatePipeline.uuid !== uuid
        ));
      } else {
        const pipeline = getters.updatePipelines.find(updatePipeline => updatePipeline.uuid === uuid);

        if (pipeline) {
          commit('updateUpdatePipelines', [
            ...getters.updatePipelines.map(updatePipeline => {
              if (updatePipeline.uuid === uuid) {
                return { uuid, pipelines, };
              }

              return updatePipeline;
            })
          ]);
        } else {
          commit('updateUpdatePipelines', [
            ...getters.updatePipelines,
            { uuid, pipelines, },
          ]);
        }

        console.debug('vuex/mortgage/setUpdatePipelines/mortgages', getters.list); //DELETE

        commit('updateList', getters.list.map((mortgage) => {
          if (mortgage.uuid === uuid) {
            return {
              ...mortgage,
              pipelines: mortgage.pipelines.map((pipeline) => {
                const foundPipeline = pipelines.find((_pipeline) => (_pipeline.uuid === pipeline.uuid));

                if (foundPipeline) {
                  console.debug('vuex/mortgage/setUpdatePipelines/mortgage', foundPipeline); //DELETE

                  return foundPipeline;
                }

                return pipeline;
              }),
            }
          }

          return mortgage;
        }));
      }

      dispatch('setChangeStatus', true);
    },
    async setDeletePipelines({ commit, getters, dispatch }, { uuid, pipelines, }) {
      console.debug('vuex/mortgage/setDeletePipelines', { uuid, pipelines, }); //DELETE

      if (!pipelines.length) {
        commit('updateDeletePipelines', getters.deletePipelines.filter(
          deletePipeline => deletePipeline.uuid !== uuid
        ));
      } else {
        const pipeline = getters.deletePipelines.find(deletePipeline => deletePipeline.uuid === uuid);

        if (pipeline) {
          commit('updateDeletePipelines', [
            ...getters.deletePipelines.map(deletePipeline => {
              if (deletePipeline.uuid === uuid) {
                return { uuid, pipelines, };
              }

              return deletePipeline;
            })
          ]);
        } else {
          commit('updateDeletePipelines', [
            ...getters.deletePipelines,
            { uuid, pipelines, },
          ]);
        }
      }

      dispatch('setChangeStatus', true);
    },

    /* SERVICE ACTIONS */
    async setChangeStatus({ commit }, status) {
      console.debug('vuex/mortgage/setChangeStatus', status); //DELETE

      commit('updateChangeStatus', status);

      return;
    },
  },

  mutations: {
    updateChangeStatus(state, status) {
      console.debug('vuex/mortgage/mutations/updateChangeStatus', status); //DELETE

      state.changed = status;
    },
    updateListNode(state, listNode) {
      console.debug('vuex/mortgage/mutations/updateListNode', listNode); //DELETE

      state.listNode = listNode.map(node => ({
        ...node,
        brokers: [...node.brokers],
        amo_mortgage_before_applying_stage_ids: [...node.amo_mortgage_before_applying_stage_ids],
        amo_mortgage_after_applying_stage_ids: [...node.amo_mortgage_after_applying_stage_ids],
        pipelines: node.pipelines.map(pipeline => ({ ...pipeline })),
      }));
    },
    updateList(state, list) {
      console.debug('vuex/mortgage/mutations/updateList', list); //DELETE

      state.list = list;
    },
    updateAddPipelines(state, addPipelines) {
      console.debug('vuex/mortgage/mutations/addPipelines', addPipelines); //DELETE

      state.addPipelines = addPipelines;
    },
    updateUpdatePipelines(state, updatePipelines) {
      console.debug('vuex/mortgage/mutations/updatePipelines', updatePipelines); //DELETE

      state.updatePipelines = updatePipelines;
    },
    updateDeletePipelines(state, deletePipelines) {
      console.debug('vuex/mortgage/mutations/deletePipelines', deletePipelines); //DELETE

      state.deletePipelines = deletePipelines;
    },
  },
}
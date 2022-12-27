import { defineComponent } from "vue";
import { mapActions } from 'vuex';
import { teleport } from '@/app/utils/teleport';
import { createMortgage } from '@/app/api/mortgageApi/createMortgage';
import { deleteMortgage } from '@/app/api/mortgageApi/deleteMortgage';
import { updateMortgage } from '@/app/api/mortgageApi/updateMortgage';
import { createPipeline } from '@/app/api/pipelineApi/createPipeline';
import { updatePipeline } from '@/app/api/pipelineApi/updatePipeline';
import { deletePipeline } from '@/app/api/pipelineApi/deletePipeline';
import Header from './components/Header/index.vue';
import Main from './components/Main/index.vue';
import Modal from '@components/TheModal/index.vue';
import ModalActions from "@components/composite/ResultActions/index.vue";

export default defineComponent({
  components: {
    Header,
    Main,
    Modal,
    ModalActions,
  },

  props: {},
  data() {
    return {
      modalVisibility: false,
      mortgagesFetched: false,
      addMortgages: [],
      updateMortgages: [],
      deleteMortgages: [],
    };
  },
  computed: {
    addPipelines() {
      return this.$store.getters["mortgage/addPipelines"];
    },
    updatePipelines() {
      return this.$store.getters["mortgage/updatePipelines"];
    },
    deletePipelines() {
      return this.$store.getters["mortgage/deletePipelines"];
    },
    storeMortgagesChanged() {
      return this.$store.getters["mortgage/changed"];
    },
    storeMortgages() {
      return this.$store.getters["mortgage/list"];
    },
    readMortgages() {
      return [
        ...this.storeMortgages,
        ...this.addMortgages,
      ].filter((mortgage) => (!this.deleteMortgages.includes(mortgage.uuid || mortgage.id)));
    },
    workArea() {
      // console.debug('AdvancedSettings::computed[widget_code]', this.$store.getters["widget/params"].widget_code); //DELETE

      return this.$store.getters["widget/params"].widget_code
        ? `#work-area-${this.$store.getters["widget/params"].widget_code}`
        : null;
    },
    stub() {
      return !this.readMortgages.length && !this.mortgagesFetched;
    },
    empty() {
      return !this.readMortgages.length;
    },
    addDisabled() {
      return this.stub;
    },
    cancelVisibility() {
      return !this.stub && !this.empty;
    },
    cancelDisabled() {
      return !this.deleteMortgages.length &&
        !this.updateMortgages.length &&
        !this.addMortgages.length &&
        !this.storeMortgagesChanged;
    },
    saveDisabled() {
      return this.cancelDisabled;
    },
  },

  watch: {
    workArea(newWorkArea, oldWorkArea) {
      // console.debug('AdvancedSettings::watch[workArea]', newWorkArea, oldWorkArea); //DELETE

      if (newWorkArea) {
        // console.debug('AdvancedSettings::watch[newWorkArea]', newWorkArea); //DELETE

        teleport({
          toSelector: newWorkArea,
          elementSelector: ".usi-mortgage--advanced-settings",
        });
      }
    },
    addMortgage(newVal, oldVal) { //DELETE
      console.debug('AdvancedSettings/watch/addMortgage', newVal, oldVal);
    },
  },
  methods: {
    /* STORE */
    ...mapActions('dictionaries', {
      fetchUsersDictionary: 'fetchUsers',
      fetchPipelinesDictionary: 'fetchPipelines',
    }),
    ...mapActions('mortgage', {
      fetchMortgages: 'fetchList',
    }),

    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    cancel() {
      console.debug('AdvancedSettings::cancel'); //DELETE

      this.modalVisibility = true;
    },
    async save() {
      console.debug('AdvancedSettings/methods/save/readMortgages', this.readMortgages); //DELETE

      await this.createMortgages(this.addMortgages);
      await this.updtMortgages(this.updateMortgages)
      await this.delMortgages(this.deleteMortgages);
      await this.createPipelines(this.addPipelines);
      await this.updtPipelines(this.updatePipelines);
      await this.delPipelines(this.deletePipelines);
      this.reset();
    },
    closeModal() {
      this.modalVisibility = false;
    },
    saveModal() {
      this.modalVisibility = false;

      this.reset();
    },
    deleteMortgage(mortgage) {
      console.debug('AdvancedSettings::deleteMortgage', mortgage); //DELETE

      if (mortgage.uuid) {
        this.deleteMortgages.push(mortgage.uuid);
      }

      if (mortgage.id) {
        this.addMortgages = this.addMortgages.filter(
          addMortgage => addMortgage.id !== mortgage.id
        );
      }

      this.$store.dispatch('mortgage/setAddPipelines', {
        uuid: mortgage.uuid || mortgage.id,
        pipelines: [],
      });
      this.$store.dispatch('mortgage/setUpdatePipelines', {
        uuid: mortgage.uuid || mortgage.id,
        pipelines: [],
      });
      this.$store.dispatch('mortgage/setDeletePipelines', {
        uuid: mortgage.uuid || mortgage.id,
        pipelines: [],
      });
    },
    addMortgage() {
      console.debug('AdvancedSettings/methods/addMortgage'); //DELETE

      this.addMortgages.push({
        id: new Date().getTime(),
        pipelines: [],
        brokers: [],
        amo_mortgage_id: null,
        amo_mortgage_creation_stage_id: null,
        amo_mortgage_before_applying_stage_ids: null,
        amo_mortgage_approved_stage_id: null,
        amo_mortgage_applying_stage_id: null,
        amo_mortgage_after_applying_stage_ids: null,
      });
    },
    updateMortgage(mortgage) {
      console.debug('AdvancedSettings/updateMortgage', mortgage); //DELETE

      if (mortgage.uuid) {
        console.debug('AdvancedSettings/updateMortgage/uuid', mortgage.uuid); //DELETE

        this.$store.dispatch('mortgage/setMortgageList', this.storeMortgages.map(storeMortgage => {
          if (storeMortgage.uuid === mortgage.uuid) {
            return { ...mortgage };
          }

          return { ...storeMortgage };
        }));

        console.debug('AdvancedSettings/updateMortgage/updateMortgages/before', this.updateMortgages); //DELETE

        this.updateMortgages = [
          ...[...this.updateMortgages].filter(updateMortgage => updateMortgage !== mortgage.uuid),
          mortgage.uuid,
        ];

        console.debug('AdvancedSettings/updateMortgage/updateMortgages/after', this.updateMortgages); //DELETE
      }

      if (mortgage.id) {
        console.debug('AdvancedSettings/updateMortgage/id', mortgage.id); //DELETE

        this.addMortgages = this.addMortgages.map(addMortgage => {
          if (addMortgage.id === mortgage.id) {
            return { ...mortgage };
          }

          return { ...addMortgage };
        });
      }
    },

    /* HELPERS */
    /* ACTIONS */
    reset() {
      console.debug('AdvancedSettings/methods/reset'); //DELETE

      this.deleteMortgages = [];
      this.updateMortgages = [];
      this.addMortgages = [];

      this.$store.dispatch('mortgage/reset');
    },
    async createMortgages(mortgages) {
      console.debug('AdvancedSettings/methods/createMortgages/mortgages', mortgages); //DELETE

      for (let i = 0; i < mortgages.length; i++) {
        await createMortgage(mortgages[i]);
      }
    },
    async updtMortgages(mortgages) {
      console.debug('AdvancedSettings/methods/updtMortgages/mortgages', mortgages); //DELETE

      for (let i = 0; i < mortgages.length; i++) {
        await updateMortgage(
          await this.storeMortgages.find(
            storeMortgage => storeMortgage.uuid === mortgages[i]
          )
        );
      }
    },
    async delMortgages(mortgages) {
      console.debug('AdvancedSettings/methods/delMortgages/mortgages', mortgages); //DELETE

      for (let i = 0; i < mortgages.length; i++) {
        await deleteMortgage(mortgages[i]);
      }
    },
    async createPipelines(mortgagePipelines) {
      console.debug('AdvancedSettings/methods/createPipelines/mortgagePipelines', mortgagePipelines); //DELETE

      for (let i = 0; i < mortgagePipelines.length; i++) {
        let tmpMortgageUuid = mortgagePipelines[i].uuid;
        let tmpMortgagePipelines = mortgagePipelines[i].pipelines;

        for (let j = 0; j < tmpMortgagePipelines.length; j++) {
          let tmpPipeline = {
            mortgage_uuid: tmpMortgageUuid,
            amo_pipeline_id: tmpMortgagePipelines[j].amo_pipeline_id,
            amo_pipeline_booking_stage_id: tmpMortgagePipelines[j].amo_pipeline_booking_stage_id,
          };

          await createPipeline(tmpPipeline);
        }
      }
    },
    async updtPipelines(mortgagePipelines) {
      console.debug('AdvancedSettings/methods/updtPipelines/mortgagePipelines', mortgagePipelines); //DELETE

      for (let i = 0; i < mortgagePipelines.length; i++) {
        let tmpMortgageUuid = mortgagePipelines[i].uuid;
        let tmpMortgagePipelines = mortgagePipelines[i].pipelines;

        for (let j = 0; j < tmpMortgagePipelines.length; j++) {
          let tmpPipeline = {
            mortgage_uuid: tmpMortgageUuid,
            uuid: tmpMortgagePipelines[j].uuid,
            amo_pipeline_id: tmpMortgagePipelines[j].amo_pipeline_id,
            amo_pipeline_booking_stage_id: tmpMortgagePipelines[j].amo_pipeline_booking_stage_id,
          };

          await updatePipeline(tmpPipeline);
        }
      }
    },
    async delPipelines(mortgagePipelines) {
      console.debug('AdvancedSettings/methods/delPipelines/mortgagePipelines', mortgagePipelines); //DELETE

      for (let i = 0; i < mortgagePipelines.length; i++) {
        let tmpMortgagePipelines = mortgagePipelines[i].pipelines;

        for (let j = 0; j < tmpMortgagePipelines.length; j++) {
          await deletePipeline(tmpMortgagePipelines[j]);
        }
      }
    },
  },

  async created() {
    // console.debug('advancedSettings::created', this.$store); //DELETE

    await this.fetchUsersDictionary();
    await this.fetchPipelinesDictionary();
    await this.fetchMortgages();

    this.mortgagesFetched = true;
  },
  async mounted() {
    // console.debug('advancedSettings::mounted', this.workArea); //DELETE

    if (this.workArea) {
      teleport({
        toSelector: this.workArea,
        elementSelector: ".usi-mortgage--advanced-settings",
      });
    }
  },
});
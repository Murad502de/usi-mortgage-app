import { defineComponent } from "vue";
import { mapActions } from 'vuex';
import { teleport } from '@/app/utils/teleport';
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
    save() {
      console.debug('AdvancedSettings/methods/save/readMortgages', this.readMortgages); //DELETE
      console.debug('AdvancedSettings/methods/save/addMortgages', this.addMortgages); //DELETE
      console.debug('AdvancedSettings/methods/save/updateMortgages', this.updateMortgages); //DELETE
      console.debug('AdvancedSettings/methods/save/deleteMortgages', this.deleteMortgages); //DELETE
      console.debug('AdvancedSettings/methods/save/addPipelines', this.addPipelines); //DELETE
      console.debug('AdvancedSettings/methods/save/updatePipelines', this.updatePipelines); //DELETE
      console.debug('AdvancedSettings/methods/save/deletePipelines', this.deletePipelines); //DELETE

      //TODO: implement integration with server
    },
    closeModal() {
      this.modalVisibility = false;
    },
    saveModal() {
      this.modalVisibility = false;

      this.deleteMortgages = [];
      this.updateMortgages = [];
      this.addMortgages = [];

      this.$store.dispatch('mortgage/reset');
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
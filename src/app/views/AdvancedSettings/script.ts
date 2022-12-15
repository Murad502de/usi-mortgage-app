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
  data: () => {
    return {
      modalVisibility: false,
      mortgagesFetched: false,
      addMortgages: [],
      updateMortgages: [],
      deleteMortgages: [],
    };
  },
  computed: {
    storeMortgages() {
      return this.$store.getters["mortgage/list"];
    },
    readMortgages() {
      return [
        ...this.storeMortgages,
        ...this.addMortgages,
      ].filter((mortgage) => (!this.deleteMortgages.includes(mortgage.uuid)));
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
        !this.addMortgages.length;
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
      console.debug('AdvancedSettings::save'); //DELETE
    },
    closeModal() {
      this.modalVisibility = false;
    },
    saveModal() {
      this.modalVisibility = false;

      this.deleteMortgages = [];
      this.updateMortgages = [];
      this.addMortgages = [];
    },
    deleteMortgage(mortgage) {
      console.debug('AdvancedSettings::deleteMortgage', mortgage); //DELETE

      this.deleteMortgages.push(mortgage.uuid);
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
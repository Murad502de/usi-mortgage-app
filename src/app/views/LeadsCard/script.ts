import debounce from "@/app/utils/debounce";
import MountPoint from '@/app/services/MountPoint';
import { fetchLeadByAmoId } from '@/app/api/leadApi/fetchLead';
import { fetchPipelineByAmoId } from '@/app/api/pipelineApi/fetchPipeline';
import MortgageButton from "@components/ui/Button/index.vue";
import Modal from '@components/TheModal/index.vue';
import Mortgage from './services/helpers/Mortgage';
import ActionsView from './components/ModalViews/ActionsView/index.vue';
import SettingsView from './components/ModalViews/SettingsView/index.vue';

export default {
  components: {
    MortgageButton,
    Modal,
    ActionsView,
    SettingsView,
  },

  props: {},
  data: () => {
    return {
      lead: null,
      pipeline: null,
      btnRedirectLoader: false,
      mortgageBtnShow: false,
      modalVisibility: false,
      activeModalView: null,
      goToBasicLeadTitle: 'Перейти в основную сделку',
      goToMortgageLeadTitle: 'Перейти в сделку в воронке "Ипотека"',
      createMortgageLeadTitle: 'Создать сделку в воронке "Ипотека"',
    };
  },
  computed: {
    leadId() {
      return +window.AMOCRM.data.current_card.id;
    },
    leadPipeline() {
      return +window.AMOCRM.data.current_card.model.attributes['lead[PIPELINE_ID]'];
    },
    isLeadMortgage() {
      return !!this.lead?.is_mortgage;
    },
    isLeadAuthorized() {
      return !!this.lead;
    },
    isPipelineAuthorized() {
      return !!this.pipeline;
    },
    relatedLead() {
      return this.lead?.lead?.amo_id;
    },
    relatedLeadUrl() {
      return `https://${process.env.VUE_APP_AMOCRM_SUBDOMAIN}.amocrm.ru/leads/detail/${this.relatedLead}`;
    },
    brokers() {
      return this.pipeline ? this.pipeline.mortgage.brokers.map(broker => {
        return window.AMOCRM.constant('managers')[broker];
      }) : [];
    },
  },

  watch: {
    lead(newVal, oldVal) {
      console.debug('app/views/LeadsCard/watch/lead/oldVal', oldVal); //DELETE
      console.debug('app/views/LeadsCard/watch/lead/newVal', newVal); //DELETE
    },
  },
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    selectMortgage: debounce(function () {
      console.debug('app/views/LeadsCard/methods/selectMortgage'); //DELETE

      this.mortgageBtnShow = Mortgage.selected();
    }, 100),
    goToRelatedLead() {
      console.debug('app/views/LeadsCard/methods/goToRelatedLead', this.relatedLead); //DELETE

      if (this.btnRedirectLoader) return;

      this.btnRedirectLoader = true;
      document.location.href = this.relatedLeadUrl;
    },
    addMortgage() {
      console.debug('app/views/LeadsCard/methods/lead', this.lead); //DELETE
      console.debug('app/views/LeadsCard/methods/pipeline', this.pipeline); //DELETE
      console.debug('app/views/LeadsCard/methods/brokers', this.brokers); //DELETE

      this.activeModalView = 'ActionsView';
      this.modalVisibility = true;
    },
    closeModal() {
      this.modalVisibility = false;
      this.activeModalView = null;
    },
    createMortgage() {
      console.debug('app/views/LeadsCard/methods/createMortgage'); //DELETE

      this.activeModalView = 'SettingsView';
    },
    consultation() {
      console.debug('app/views/LeadsCard/methods/consultation'); //DELETE

      this.activeModalView = 'SettingsView';
    },

    /* HELPERS */
    /* ACTIONS */
  },

  async beforeCreate() {
    console.debug('app/views/LeadsCard/beforeCreate'); //DELETE

    await MountPoint.createAfter({
      point: 'usi-mortgage-app--button', //FIXME: move to .env
      after: `div[data-id="${process.env.VUE_APP_PAY_FORM_SWITCHER_ID}"]`, //FIXME: move to .env
    });
  },
  async created() {
    console.debug('app/views/LeadsCard/created/leadId', this.leadId); //DELETE

    Mortgage.addEventListener({ callback: this.selectMortgage });

    const fetchLeadByAmoIdResponse = await fetchLeadByAmoId(this.leadId);

    console.debug('app/views/LeadsCard/created/fetchLeadByAmoIdResponse', fetchLeadByAmoIdResponse); //DELETE

    if (!!fetchLeadByAmoIdResponse) {
      this.lead = fetchLeadByAmoIdResponse;
    }

    const fetchPipelineByAmoIdResponse = await fetchPipelineByAmoId(this.leadPipeline);

    console.debug('app/views/LeadsCard/created/fetchPipelineByAmoIdResponse', fetchPipelineByAmoIdResponse); //DELETE

    if (!!fetchPipelineByAmoIdResponse) {
      this.pipeline = fetchPipelineByAmoIdResponse;
    }
  },
  mounted() {
    console.debug('app/views/LeadsCard/mounted'); //DELETE

    this.mortgageBtnShow = Mortgage.selected();
  },
  unmounted() {
    console.debug('app/views/LeadsCard/unmounted'); //DELETE

    Mortgage.removeEventListener({ callback: this.selectMortgage });
  },
};
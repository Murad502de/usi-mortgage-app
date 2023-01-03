import debounce from "@/app/utils/debounce";
import MountPoint from '@/app/services/MountPoint';
import { fetchLeadByAmoId } from '@/app/api/leadApi/fetchLead';
import { createLead } from '@/app/api/leadApi/createLead';
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
      createdLeadType: null,
      btnRedirectLoader: false,
      mortgageBtnShow: false,
      modalVisibility: false,
      activeModalView: null,
      goToBasicLeadTitle: 'Перейти в основную сделку',
      goToMortgageLeadTitle: 'Перейти в сделку ипотеки',
      createMortgageLeadTitle: 'Создать сделку в воронке "Ипотека"',
    };
  },
  computed: {
    manager() {
      return {
        manager_amo_id: +window.AMOCRM.constant('user').id,
        manager_amo_name: window.AMOCRM.constant('user').name,
      };
    },
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
      console.debug('app/views/LeadsCard/methods/btnRedirectLoader', this.btnRedirectLoader); //DELETE

      if (this.btnRedirectLoader) {
        return;
      }

      this.activeModalView = 'ActionsView';
      this.modalVisibility = true;
    },
    closeModal() {
      this.modalVisibility = false;
      this.activeModalView = null;
    },
    actionsViewYes() {
      console.debug('app/views/LeadsCard/methods/actionsViewYes'); //DELETE

      this.activeModalView = 'SettingsView';
      this.createdLeadType = 'mortgage';
    },
    actionsViewConsultation() {
      console.debug('app/views/LeadsCard/methods/actionsViewConsultation'); //DELETE

      this.activeModalView = 'SettingsView';
      this.createdLeadType = 'consultation';
    },

    /* HELPERS */
    /* ACTIONS */
    async createMortgage(data) {
      const requestParams = {
        lead_amo_id: this.leadId,
        manager_amo_id: this.manager.manager_amo_id,
        manager_amo_name: this.manager.manager_amo_name,
        broker_amo_id: +data.broker.id,
        broker_amo_name: data.broker.title,
        created_lead_type: this.createdLeadType,
        message_for_broker: data.message,
      };

      console.debug('app/views/LeadsCard/methods/createMortgage/requestParams', requestParams); //DELETE

      this.closeModal();

      this.btnRedirectLoader = true;

      await createLead(requestParams);
      await this.fetchLead();

      this.btnRedirectLoader = false;
    },
    async fetchLead() {
      console.debug('app/views/LeadsCard/methods/fetchLead'); //DELETE

      const fetchLeadByAmoIdResponse = await fetchLeadByAmoId(this.leadId);

      console.debug('app/views/LeadsCard/created/fetchLeadByAmoIdResponse', fetchLeadByAmoIdResponse); //DELETE

      if (!!fetchLeadByAmoIdResponse) {
        this.lead = fetchLeadByAmoIdResponse;
      }
    },
    async fetchPipeline() {
      console.debug('app/views/LeadsCard/methods/fetchPipeline'); //DELETE

      const fetchPipelineByAmoIdResponse = await fetchPipelineByAmoId(this.leadPipeline);

      console.debug('app/views/LeadsCard/created/fetchPipelineByAmoIdResponse', fetchPipelineByAmoIdResponse); //DELETE

      if (!!fetchPipelineByAmoIdResponse) {
        this.pipeline = fetchPipelineByAmoIdResponse;
      }
    },
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
    await this.fetchLead();
    await this.fetchPipeline();
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
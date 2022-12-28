import debounce from "@/app/utils/debounce";
import MountPoint from '@/app/services/MountPoint';
import Mortgage from './services/helpers/Mortgage';
import MortgageButton from "@components/ui/Button/index.vue";
import { fetchLeadByAmoId } from '@/app/api/leadApi/fetchLead';

export default {
  components: {
    MortgageButton,
  },

  props: {},
  data: () => {
    return {
      lead: null,
      btnRedirectLoader: false,
      mortgageBtnShow: false,
      goToBasicLeadTitle: 'Перейти в основную сделку',
      goToMortgageLeadTitle: 'Перейти в сделку в воронке "Ипотека"',
      createMortgageLeadTitle: 'Создать сделку в воронке "Ипотека"',
    };
  },
  computed: {
    leadId() {
      return +window.AMOCRM.data.current_card.id;
    },
    isLeadMortgage() {
      return !!this.lead?.is_mortgage;
    },
    isLeadAuthorized() {
      return !!this.lead;
    },
    isPipelineAuthorized() {
      return false;
    },
    relatedLead() {
      return this.lead?.lead?.amo_id;
    },
    relatedLeadUrl() {
      return `https://${process.env.VUE_APP_AMOCRM_SUBDOMAIN}.amocrm.ru/leads/detail/${this.relatedLead}`;
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
    const response = await fetchLeadByAmoId(this.leadId);

    console.debug('app/views/LeadsCard/created/response', response); //DELETE

    if (!!response) {
      this.lead = response;
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
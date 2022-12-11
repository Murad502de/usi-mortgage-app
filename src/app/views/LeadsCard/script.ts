import debounce from "@/app/utils/debounce";
import MountPoint from '@/app/services/MountPoint';
import Mortgage from './services/helpers/Mortgage';
import MortgageButton from "@components/ui/Button/index.vue";

export default {
  components: {
    MortgageButton,
  },

  props: {},
  data: () => {
    return {
      mortgageButtonTitle: "HYPOTHEK BTN 2022",
      mortgageBtnShow: false,
    };
  },
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    selectMortgage: debounce(function () {
      this.mortgageBtnShow = Mortgage.selected();
    }, 100),
    /* HELPERS */
    /* ACTIONS */
  },

  async beforeCreate() {
    await MountPoint.createAfter({
      point: 'usi-mortgage-app--button', //FIXME: move to .env
      after: `div[data-id="${process.env.VUE_APP_PAY_FORM_SWITCHER_ID}"]`, //FIXME: move to .env
    });
  },
  created() {
    console.debug('lead card created jq', $); //DELETE

    Mortgage.addEventListener({ callback: this.selectMortgage });
  },
  mounted() {
    this.mortgageBtnShow = Mortgage.selected();
  },
  unmounted() {
    Mortgage.removeEventListener({ callback: this.selectMortgage });
  },
};
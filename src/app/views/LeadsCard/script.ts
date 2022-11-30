import debounce from "@/utils/debounce";
import MountPoint from '@/services/MountPoint';
import Mortgage from './services/helpers/Mortgage';
import MortgageButton from "@/components/ui/Button";

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
      point: 'usi-mortgage-app--button',
      after: 'div[data-id="685555"]',
    });
  },
  created() {
    Mortgage.addEventListener({ callback: this.selectMortgage });
  },
  mounted() {
    this.mortgageBtnShow = Mortgage.selected();
  },
  unmounted() {
    Mortgage.removeEventListener({ callback: this.selectMortgage });
  },
};
import { defineComponent } from "vue";
import Mortgage from '../Mortgage/index.vue';

export default defineComponent({
  components: {
    Mortgage,
  },

  props: {
    mortgages: {
      type: Array,
      default: () => []
    },
  },
  data: () => ({}),
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug('MAIN::created', this.mortgages); //DELETE
  },
  mounted() {
    console.debug('MAIN::mounted', this.mortgages); //DELETE
  },
});
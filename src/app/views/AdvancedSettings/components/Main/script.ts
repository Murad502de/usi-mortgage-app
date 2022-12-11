import { defineComponent } from "vue";
import Mortgage from '../Mortgage/index.vue';
import Card from '@components/ui/Card/index.vue';

export default defineComponent({
  components: {
    Mortgage,
    Card,
  },

  props: {
    mortgages: {
      type: Array,
      default: () => []
    },
    stub: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  computed: {
    pipelines() {
      return this.$store.getters["dictionaries/pipelines"];
    },
  },

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug('MAIN::created', this.mortgages, this.pipelines); //DELETE
  },
  mounted() {
    console.debug('MAIN::mounted', this.mortgages, this.pipelines); //DELETE
  },
});
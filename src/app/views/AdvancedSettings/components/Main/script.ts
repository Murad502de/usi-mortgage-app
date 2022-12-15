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
    brokers() {
      return this.$store.getters["dictionaries/users"];
    },
  },

  watch: {
    mortgages(newVal, oldVal) { //DELETE
      console.debug('Main::watch[mortgages]', newVal, oldVal); //DELETE
    },
  },
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    deleteMortgage(mortgage) {
      console.debug('Main::deleteMortgage', mortgage); //DELETE

      this.$emit('delete', mortgage);
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug('MAIN::created[mortgages]', this.mortgages); //DELETE
    console.debug('MAIN::created[pipelines]', this.pipelines); //DELETE
    console.debug('MAIN::created[brokers]', this.brokers); //DELETE
  },
  mounted() {
    console.debug('MAIN::mounted[mortgages]', this.mortgages); //DELETE
    console.debug('MAIN::mounted[pipelines]', this.pipelines); //DELETE
    console.debug('MAIN::mounted[brokers]', this.brokers); //DELETE
  },
});
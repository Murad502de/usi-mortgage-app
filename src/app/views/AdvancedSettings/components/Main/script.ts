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
      console.debug('Main/watch/mortgages', newVal, oldVal); //DELETE
    },
  },
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    deleteMortgage(mortgage) {
      console.debug('Main/deleteMortgage', mortgage); //DELETE

      this.$emit('delete', mortgage);
    },
    updateMortgage(mortgage) {
      console.debug('Main/updateMortgage', mortgage); //DELETE

      this.$emit('updateMortgage', {
        ...mortgage,
        amo_mortgage_applying_stage_id: Number(mortgage.amo_mortgage_applying_stage_id),
        amo_mortgage_approved_stage_id: Number(mortgage.amo_mortgage_approved_stage_id),
        amo_mortgage_creation_stage_id: Number(mortgage.amo_mortgage_creation_stage_id),
      });
    },
    addMortgagePipelines(data) {
      console.debug('Main/addMortgagePipelines', data); //DELETE
    },
    updateMortgagePipelines(data) {
      console.debug('Main/updateMortgagePipelines', data); //DELETE
    },
    deleteMortgagePipelines(data) {
      console.debug('Main/deleteMortgagePipelines', data); //DELETE
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug('MAIN/created/mortgages', this.mortgages); //DELETE
    console.debug('MAIN/created/pipelines', this.pipelines); //DELETE
    console.debug('MAIN/created/brokers', this.brokers); //DELETE
  },
  mounted() {
    console.debug('MAIN/mounted/mortgages]', this.mortgages); //DELETE
    console.debug('MAIN/mounted/pipelines]', this.pipelines); //DELETE
    console.debug('MAIN/mounted/brokers]', this.brokers); //DELETE
  },
});
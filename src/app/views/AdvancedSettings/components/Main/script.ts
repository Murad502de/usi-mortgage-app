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
    addPipelines() {
      return this.$store.getters["mortgage/addPipelines"];
    },
    updatePipelines() {
      return this.$store.getters["mortgage/updatePipelines"];
    },
    deletePipelines() {
      return this.$store.getters["mortgage/deletePipelines"];
    },
    pipelines() {
      // console.debug('Main/computed/pipelines/deletePipelines', this.deletePipelines); //DELETE
      // console.debug('Main/computed/pipelines/pipelines', this.$store.getters["dictionaries/pipelines"]); //DELETE

      return this.$store.getters["dictionaries/pipelines"].map((pipeline) => {
        let foundPipeline = false;
        let foundPipelineUuid = '';
        // let foundPipelineAmoId = '';

        for (let i = 0; i < this.mortgages.length; i++) {
          if (+this.mortgages[i].amo_mortgage_id === +pipeline.amo_id) {
            foundPipeline = true;
            // foundPipelineUuid = this.mortgages[i].uuid;
            // foundPipelineAmoId = this.mortgages[i].amo_mortgage_id;
            break;
          }

          mortgagesLoop:
          for (let j = 0; j < this.mortgages[i].pipelines.length; j++) {
            if (+this.mortgages[i].pipelines[j].amo_pipeline_id === +pipeline.amo_id) {
              foundPipeline = true;
              foundPipelineUuid = this.mortgages[i].pipelines[j].uuid;
              break mortgagesLoop;
            }
          }
        }

        for (let i = 0; i < this.deletePipelines.length; i++) {
          deletePipelines:
          for (let j = 0; j < this.deletePipelines[i].pipelines.length; j++) {
            // console.debug('Main/computed/pipelines/deletePipelines/uuid', this.deletePipelines[i].pipelines[j]); //DELETE
            // console.debug('Main/computed/pipelines/deletePipelines/foundPipelineUuid', foundPipelineUuid); //DELETE

            if (this.deletePipelines[i].pipelines[j] === foundPipelineUuid) {
              foundPipeline = false;
              break deletePipelines;
            }
          }
        }

        for (let i = 0; i < this.updatePipelines.length; i++) {
          updatePipelines:
          for (let j = 0; j < this.updatePipelines[i].pipelines.length; j++) {
            // console.debug('Main/computed/pipelines/updatePipelines/amo_pipeline_id', this.updatePipelines[i].pipelines[j].amo_pipeline_id); //DELETE
            // console.debug('Main/computed/pipelines/updatePipelines/pipeline.amo_id', pipeline.amo_id); //DELETE

            if (+this.updatePipelines[i].pipelines[j].amo_pipeline_id === +pipeline.amo_id) {
              // console.debug('Main/computed/pipelines/updatePipelines/FOUND', +pipeline.amo_id); //DELETE

              foundPipeline = true;
              break updatePipelines;
            }
          }
        }

        for (let i = 0; i < this.addPipelines.length; i++) {
          addPipelines:
          for (let j = 0; j < this.addPipelines[i].pipelines.length; j++) {
            // console.debug('Main/computed/pipelines/addPipelines/amo_pipeline_id', this.addPipelines[i].pipelines[j].amo_pipeline_id); //DELETE
            // console.debug('Main/computed/pipelines/addPipelines/pipeline.amo_id', pipeline.amo_id); //DELETE

            if (+this.addPipelines[i].pipelines[j].amo_pipeline_id === +pipeline.amo_id) {
              // console.debug('Main/computed/pipelines/addPipelines/FOUND', +pipeline.amo_id); //DELETE

              foundPipeline = true;
              break addPipelines;
            }
          }
        }

        return {
          ...pipeline,
          blocked: foundPipeline,
        };
      });
    },
    brokers() {
      return this.$store.getters["dictionaries/users"];
    },
  },

  watch: {
    mortgages(newVal, oldVal) { //DELETE
      console.debug('Main/watch/mortgages', newVal, oldVal); //DELETE
    },
    pipelines(newVal, oldVal) { //DELETE
      console.debug('Main/watch/pipelines', newVal, oldVal); //DELETE
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
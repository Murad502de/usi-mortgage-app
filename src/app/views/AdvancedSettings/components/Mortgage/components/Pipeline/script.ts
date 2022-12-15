import { defineComponent } from "vue";
import Select from '@components/ui/Select/index.vue';
import TextField from '@components/ui/TextField/index.vue';
import Icon from '@components/ui-embedded/Icon/index.vue';

export default defineComponent({
  components: {
    Select,
    TextField,
    Icon,
  },

  props: {
    stub: {
      type: Boolean,
      default: false,
    },
    pipelines: {
      type: Array,
      default: () => ([]),
    },
    pipelineTitle: {
      type: String,
      default: '',
    },
    stageTitle: {
      type: String,
      default: '',
    },
    pipelineValue: {
      type: Object,
      default: null,
    },
    stageValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      bufferStageValue: '',
      bufferPipelineValue: '',
    };
  },
  computed: {},

  watch: {
    bufferStageValue(newVal, oldVal) {
      // console.debug('Pipeline::watcher[bufferStageValue]', newVal, oldVal); //DELETE

      if (newVal !== oldVal) {
        // console.debug('Pipeline::watcher[bufferStageValue][update]', newVal, oldVal); //DELETE

        this.$emit('update:stageValue', this.bufferStageValue);
      }
    },
    stageValue(newVal, oldVal) {
      // console.debug('Pipeline::watcher[stageValue]', newVal, oldVal); //DELETE

      if (newVal !== oldVal) {
        // console.debug('Pipeline::watcher[stageValue][update]', newVal, oldVal); //DELETE

        this.bufferStageValue = newVal;
      }
    },
    bufferPipelineValue(newVal, oldVal) {
      // console.debug('Pipeline::watcher[bufferPipelineValue]', newVal, oldVal); //DELETE

      if (newVal !== oldVal) {
        // console.debug('Pipeline::watcher[bufferPipelineValue][update]', newVal, oldVal); //DELETE

        this.$emit('update:pipelineValue', this.bufferPipelineValue);
      }
    },
    pipelineValue(newVal, oldVal) {
      console.debug('Pipeline::watcher[pipelineValue]', newVal, oldVal); //DELETE

      if (newVal !== oldVal) {
        // console.debug('Pipeline::watcher[pipelineValue][update]', newVal, oldVal); //DELETE

        this.bufferPipelineValue = newVal;
      }
    },
  },
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    // console.debug('Pipeline::created[stage]', this.bufferStageValue, this.stageValue); //DELETE
    // console.debug('Pipeline::created[pipeline]', this.bufferPipelineValue, this.pipelineValue); //DELETE

    this.bufferStageValue = this.stageValue;
    this.bufferPipelineValue = this.pipelineValue;

    // console.debug('Pipeline::created[bufferStageValue]', this.bufferStageValue); //DELETE
    // console.debug('Pipeline::created[bufferPipelineValue]', this.bufferPipelineValue); //DELETE
  },
  mounted() {
    // console.debug('Pipeline::mounted[stage]', this.bufferStageValue, this.stageValue); //DELETE
    // console.debug('Pipeline::mounted[pipeline]', this.bufferPipelineValue, this.pipelineValue); //DELETE
  },
});
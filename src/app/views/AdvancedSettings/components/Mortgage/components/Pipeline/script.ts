import { defineComponent } from "vue";
import Select from '@components/ui/Select/index.vue';
import TextField from '@components/ui/TextField/index.vue';

export default defineComponent({
  components: {
    Select,
    TextField,
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
      // bufferValue: this.stageValue,
      bufferValue: '',
    };
  },
  computed: {},

  watch: {
    bufferValue(newVal, oldVal) {
      console.debug('Pipeline::watcher[bufferValue]', newVal, oldVal); //DELETE

      if (newVal !== oldVal) {
        console.debug('Pipeline::watcher[bufferValue][update]', newVal, oldVal); //DELETE

        this.$emit('update:stageValue', this.bufferValue);
      }
    },
    stageValue(newVal, oldVal) {
      console.debug('Pipeline::watcher[stageValue]', newVal, oldVal); //DELETE

      if (newVal !== oldVal) {
        console.debug('Pipeline::watcher[stageValue][update]', newVal, oldVal); //DELETE

        this.bufferValue = newVal;
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
    console.debug('Pipeline::created', this.bufferValue, this.stageValue); //DELETE

    this.bufferValue = this.stageValue;

    console.debug('Pipeline::created[bufferValue]', this.bufferValue); //DELETE
  },
  mounted() {
    console.debug('Pipeline::mounted', this.bufferValue, this.stageValue); //DELETE
  },
});
import { defineComponent } from "vue";
import Skeleton from '@components/ui-embedded/Skeleton/index.vue';

export default defineComponent({
  components: {
    Skeleton,
  },

  props: {
    type: {
      type: String,
      default: () => "text"
    },
    mask: {
      type: Object,
      default: () => null,
    },
    error: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: '280'
    },
    label: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: () => "default"
    },
    center: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    hasError: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    stub: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.bufferValue = this.modelValue
  },
  mounted() {
    if (this.autofocus) this.$nextTick(() => {
      this.setFocus()
    })
  },
  data() {
    return {
      bufferValue: this.modelValue,
      focused: false,
      showPassword: false
    }
  },

  computed: {
    hasValue() {
      return !!this.modelValue
    },
    getType() {
      return this.showPassword ? 'text' : this.type
    }
  },

  methods: {
    setFocus() {
      this.$refs.ipt.focus()
    },
    inputHandler(e) {
      console.debug('inputHandler', e); //DELETE

      let event = e;

      this.$emit('input', event);
    }
  },
  watch: {
    bufferValue(newVal, oldVal) {
      if (this.type === 'number') {
        let temp = parseInt(newVal) || 0
        this.bufferValue = temp > 150 ? 150 : temp
      }

      if (this.type === 'date') {
        let dateArray = newVal.split('-');

        if (dateArray[0].length > 4) {
          this.bufferValue = `2100-${dateArray[1]}-${dateArray[2]}`;

          this.$emit('update:modelValue', `2100-${dateArray[1]}-${dateArray[2]}`);
        } else {
          this.$emit('update:modelValue', newVal);
        }
      } else {
        if (newVal !== oldVal) {
          this.$emit('update:modelValue', this.bufferValue);
        }
      }
    },
    modelValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.bufferValue = newVal;
      }
    }
  }
});
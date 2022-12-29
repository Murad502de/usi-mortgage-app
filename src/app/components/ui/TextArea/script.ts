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
    value: {
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

  watch: {
    bufferValue(newVal, oldVal) {
      console.debug('components/ui/TextArea/watch/bufferValue/newVal', newVal); //DELETE
      console.debug('components/ui/TextArea/watch/bufferValue/oldVal', oldVal); //DELETE

      if (newVal !== oldVal) {
        this.$emit('update:modelValue', this.bufferValue);
      }
    },
    modelValue(newVal, oldVal) {
      console.debug('components/ui/TextArea/watch/modelValue/newVal', newVal); //DELETE
      console.debug('components/ui/TextArea/watch/modelValue/oldVal', oldVal); //DELETE

      if (newVal !== oldVal) {
        this.bufferValue = newVal;
      }
    }
  },
  methods: {
    setFocus() {
      console.debug('components/ui/TextArea/methods/setFocus'); //DELETE

      this.$refs.ipt.focus()
    },
    input(e) {
      console.debug('components/ui/TextArea/methods/input/value', e.target.value); //DELETE

      this.$emit('inputValue', e.target.value);
    }
  },

  created() {
    this.bufferValue = this.modelValue || this.value;
  },
  mounted() {
    if (this.autofocus) this.$nextTick(() => {
      this.setFocus()
    })
  },
});
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
  created() {
    this.bufferValue = this.modelValue || this.value;
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
    input(e) {
      console.debug('TextField::input', e); //DELETE

      this.$emit('inputValue', e.target.value);
    }
  },
  watch: {
    bufferValue(newVal, oldVal) {
      console.debug('TextField::watcher[bufferValue]', newVal, oldVal); //DELETE

      if (newVal !== oldVal) {
        console.debug('TextField::watcher[bufferValue][update]', newVal, oldVal); //DELETE

        this.$emit('update:modelValue', this.bufferValue);
      }
    },
    modelValue(newVal, oldVal) {
      console.debug('TextField::watcher[modelValue]', newVal, oldVal); //DELETE

      if (newVal !== oldVal) {
        console.debug('TextField::watcher[modelValue][update]', newVal, oldVal); //DELETE

        this.bufferValue = newVal;
      }
    }
  }
});
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  props: {
    modelValue: {
      type: [String, Number],
      default: 5
    },
    items: {
      type: [Array, Object],
      default: () => []
    },
    valueProp: {
      type: String,
      default: null
    },
    theme: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      showList: false,
      vcoSettings: {
        handler: this.hide,
        events: ['mousedown'],
        isActive: true,
        detectIFrame: true,
        capture: false
      }
    };
  },
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    toggle() {
      this.showList = !this.showList
    },
    hide() {
      this.showList = false
    },
    selectItem(index) {
      this.$emit('update:modelValue', this.items[index])
      this.hide()
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() { },
  mounted() { },
});
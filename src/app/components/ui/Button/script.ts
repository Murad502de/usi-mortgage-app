import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  props: {
    loader: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
  data: () => ({}),
  computed: {
    classes() {
      return [
        { 'mt-button_load': this.loader },
        this.color ? `um-button_${this.color}` : '',
        this.disabled ? `um-button_disabled` : '',
      ];
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

  created() { },
  mounted() { },
});
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
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
  computed: {},

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
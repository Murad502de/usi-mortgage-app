export default {
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
      default: 'green'
    }
  },
  data: () => ({}),
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    click() {
      console.debug('on hypothek button clicked'); //DELETE
    },
    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug('BUTTON'); //DELETE
  },
  mounted() {
    console.debug('BUTTON'); //DELETE
  },
};
import { defineComponent } from "vue";
import Close from './icons/Close/index.vue';
import ChevronDown from './icons/ChevronDown/index.vue';

export default defineComponent({
  components: {
    Close,
    ChevronDown,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#000000",
    },
    preloader: {
      type: Boolean,
      default: false,
    },
    preloaderColor: {
      type: String,
      default: "#000000",
    },
    preloaderName: {
      type: String,
      default: 'Preloader',
    },
    preloaderRotation: {
      type: String,
      default: 'right',
    },
  },
  data: () => ({}),
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    getIconCmpName({ name, }) {
      switch (name.toLowerCase()) {
        case 'close':
          return 'Close';

        case 'chevrondown':
          return 'ChevronDown';

        default:
          return null;
      }
    },

    /* SETTERS */
    /* HANDLERS */
    svgClickHandler() {
      this.$emit('svg-click');
    },
    /* HELPERS */
    /* ACTIONS */
  },

  created() { },
  mounted() { },
});
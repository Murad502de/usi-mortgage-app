import { defineComponent } from "vue";
import ModalCard from '@components/ui/Card/index.vue';

export default defineComponent({
  components: {
    ModalCard,
  },

  props: {
    teleportTo: {
      type: String,
      default: 'body',
    },
    visibility: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    close() {
      this.$emit('close');
    },
    /* HELPERS */
    /* ACTIONS */
  },

  created() { },
  mounted() { },
});
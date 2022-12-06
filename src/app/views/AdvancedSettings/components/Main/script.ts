import { defineComponent } from "vue";
// import { PropType } from 'vue'
import Mortgage from '../Mortgage/index.vue';

// interface IMortgage {
//   title: string
//   author: string
//   year: number
// }

export default defineComponent({
  components: {
    Mortgage,
  },

  props: {
    mortgage: {
      type: Object,
      required: true,
    },
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
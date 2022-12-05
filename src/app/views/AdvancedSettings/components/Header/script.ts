import { defineComponent } from "vue";
import Button from "@components/ui/Button/index.vue";
import ResultActions from "@components/composite/ResultActions/index.vue";

export default defineComponent({
  components: {
    Button,
    ResultActions,
  },

  props: {},
  data() {
    return {
      addMortgageTitle: 'Добавить ипотеку',
    };
  },
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
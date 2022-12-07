import { defineComponent } from "vue";
import Button from "@components/ui/Button/index.vue";
import ResultActions from "@components/composite/ResultActions/index.vue";

export default defineComponent({
  components: {
    Button,
    ResultActions,
  },

  props: {
    stub: {
      type: Boolean,
      default: false,
    },
  },
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
    add() {
      console.debug('AdvancedSettings[Header]::add'); //DELETE

      this.$emit('add');
    },
    cancel() {
      console.debug('AdvancedSettings[Header]::cancel'); //DELETE

      this.$emit('cancel');
    },
    save() {
      console.debug('AdvancedSettings[Header]::save'); //DELETE

      this.$emit('save');
    },
    /* HELPERS */
    /* ACTIONS */
  },

  created() { },
  mounted() { },
});
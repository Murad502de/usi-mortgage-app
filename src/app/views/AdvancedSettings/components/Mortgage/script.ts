import { defineComponent } from "vue";
import Card from '@components/ui/Card/index.vue';
import Icon from '@components/ui-embedded/Icon/index.vue';
import Select from '@components/ui/Select/index.vue';

export default defineComponent({
  components: {
    Card,
    Icon,
    Select,
  },

  props: {},
  data() {
    return {
      cardTitel: 'Настройки узла обработки ипотеки',
      mortgageStagesTitle: 'Этапы воронки "Ипотека"',
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
import { defineComponent } from "vue";
import Card from '@components/ui/Card/index.vue';
import Icon from '@components/ui-embedded/Icon/index.vue';

export default defineComponent({
  // name: "Button",
  components: {
    Card,
    Icon,
  },

  props: {},
  data() {
    return {
      cardTitel: 'Настройки узла обработки ипотеки',
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
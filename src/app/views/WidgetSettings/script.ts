import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  props: {},
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

  created() {
    console.debug("WidgetSettings << created"); //DELETE

    console.debug('THiS mounted', this.$apiGatewayDefault); //DELETE
  },
  mounted() {
    console.debug("WidgetSettings << mounted"); //DELETE

    console.debug('THiS mounted', this.$apiGatewayDefault); //DELETE
  },
});
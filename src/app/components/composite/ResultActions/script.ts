import { defineComponent } from "vue";
import Button from "@components/ui/Button/index.vue";

export default defineComponent({
  components: {
    Button,
  },

  props: {
    cancelBtnTitle: {
      type: String,
      default: "Отменить",
    },
    saveBtnTitle: {
      type: String,
      default: "Сохранить",
    },
  },
  data() {
    return {};
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
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
    cancelVisibility: {
      type: Boolean,
      default: true
    },
    cancelDisabled: {
      type: Boolean,
      default: false
    },
    saveVisibility: {
      type: Boolean,
      default: true
    },
    saveDisabled: {
      type: Boolean,
      default: false
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
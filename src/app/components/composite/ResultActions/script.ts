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
    loader: {
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
    cancel() {
      console.debug('ResultActions::cancel'); //DELETE

      if (!this.cancelDisabled && !this.loader) {
        this.$emit('cancel');
      }
    },
    save() {
      console.debug('ResultActions::save'); //DELETE

      if (!this.saveDisabled && !this.loader) {
        this.$emit('save');
      }
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() { },
  mounted() { },
});
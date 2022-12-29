import Button from "@components/ui/Button/index.vue";

export default {
  components: {
    Button,
  },

  props: {},
  data() {
    return {};
  },
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    yes() {
      console.debug('app/views/LeadsCard/components/ModalViews/ActionsView/methods/yes'); //DELETE

      this.$emit('yes');
    },
    consultation() {
      console.debug('app/views/LeadsCard/components/ModalViews/ActionsView/methods/consultation'); //DELETE

      this.$emit('consultation');
    },
    cancel() {
      console.debug('app/views/LeadsCard/components/ModalViews/ActionsView/methods/cancel'); //DELETE

      this.$emit('cancel');
    },
    /* HELPERS */
    /* ACTIONS */
  },

  async created() {
    console.debug('app/views/LeadsCard/components/ModalViews/ActionsView/created'); //DELETE
  },
  mounted() {
    console.debug('app/views/LeadsCard/components/ModalViews/ActionsView/mounted'); //DELETE
  },
};
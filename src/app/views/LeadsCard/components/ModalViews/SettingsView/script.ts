import Button from "@components/ui/Button/index.vue";
import TextArea from "@components/ui/TextArea/index.vue";

export default {
  components: {
    Button,
    TextArea,
  },

  props: {
    brokers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      message: '',
    };
  },
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    selectBroker({ broker }) {
      console.debug('app/views/LeadsCard/components/ModalViews/SettingsView/methods/selectBroker/broker', broker); //DELETE

      if (this.message.replace(/\s+/g, ' ').trim().length < 20) {
        alert('Поле "Примечание для брокера" обязательно к заполнению. Введенная строка должна быть не менее 20 символов.');

        return;
      }

      this.$emit('selectBroker', {
        broker,
        message: this.message,
      });
    },

    /* HELPERS */
    /* ACTIONS */
  },

  async created() {
    console.debug('app/views/LeadsCard/components/ModalViews/SettingsView/created'); //DELETE
  },
  mounted() {
    console.debug('app/views/LeadsCard/components/ModalViews/SettingsView/mounted'); //DELETE
  },
};
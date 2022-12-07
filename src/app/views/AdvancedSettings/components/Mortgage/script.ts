import { defineComponent } from "vue";
import Card from '@components/ui/Card/index.vue';
import Icon from '@components/ui-embedded/Icon/index.vue';
import Select from '@components/ui/Select/index.vue';
import TextField from '@components/ui/TextField/index.vue';
import Button from "@components/ui/Button/index.vue";

export default defineComponent({
  components: {
    Card,
    Icon,
    Select,
    TextField,
    Button,
  },

  props: {},
  data() {
    return {
      cardTitel: 'Настройки узла обработки ипотеки',
      mortgageStagesTitle: 'Этапы воронки "Ипотека"',
      idApplyingStageTitle: 'ID Этапа "Подача заявки"',
      idsBeforeApplyingStageTitle: 'ID Этапов до этапа "Подача заявки" через ","',
      idsAfterApplyingStageTitle: 'ID Этапов после этапа "Подача заявки" через ","',
      idMortgageApprovedStageTitle: 'ID Этапа "Ипотека одобрена"',
      idBookingStageTitle: 'ID Этапа "Бронирование"',
      addNewPipelineTitle: 'Добавить воронку',
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
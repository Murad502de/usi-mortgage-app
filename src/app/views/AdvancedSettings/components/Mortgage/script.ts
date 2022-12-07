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

  props: {
    stub: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cardTitel: 'Настройки узла обработки ипотеки',
      mortgageStagesTitle: 'Этапы воронки "Ипотека"',
      mortgagePipelineTitle: 'Воронка "Ипотека"',
      basicPipelineTitle: 'Воронка',
      idCreationLeadStageTitle: 'ID этапа создания ЛИДа',
      idApplyingStageTitle: 'ID этапа "Подача заявки"',
      idsBeforeApplyingStageTitle: 'ID этапов до этапа "Подача заявки" через ","',
      idsAfterApplyingStageTitle: 'ID этапов после этапа "Подача заявки" через ","',
      idMortgageApprovedStageTitle: 'ID этапа "Ипотека одобрена"',
      idBookingStageTitle: 'ID этапа "Бронирование"',
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
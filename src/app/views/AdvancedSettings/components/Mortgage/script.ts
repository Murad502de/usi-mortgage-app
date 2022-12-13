import { defineComponent } from "vue";
import Card from '@components/ui/Card/index.vue';
import Icon from '@components/ui-embedded/Icon/index.vue';
import Select from '@components/ui/Select/index.vue';
import TextField from '@components/ui/TextField/index.vue';
import Button from '@components/ui/Button/index.vue';
import Pipeline from './components/Pipeline/index.vue';

export default defineComponent({
  components: {
    Card,
    Icon,
    Select,
    TextField,
    Button,
    Pipeline,
  },

  props: {
    stub: {
      type: Boolean,
      default: false,
    },
    pipelines: {
      type: Array,
      default: () => ([]),
    },
    brokers: {
      type: Array,
      default: () => ([]),
    },
    mortgage: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      cardTitel: 'Настройки узла обработки ипотеки',
      mortgageStagesTitle: 'Этапы воронки "Ипотека"',
      mortgagePipelineTitle: 'Воронка "Ипотека"',
      mortgageBrokersTitle: 'Брокеры',
      basicPipelineTitle: 'Воронка',
      idCreationLeadStageTitle: 'ID этапа создания ЛИДа',
      idApplyingStageTitle: 'ID этапа "Подача заявки"',
      idsBeforeApplyingStageTitle: 'ID этапов до этапа "Подача заявки" через ","',
      idsAfterApplyingStageTitle: 'ID этапов после этапа "Подача заявки" через ","',
      idMortgageApprovedStageTitle: 'ID этапа "Ипотека одобрена"',
      idBookingStageTitle: 'ID этапа "Бронирование"',
      addNewPipelineTitle: 'Добавить воронку',
      mortgagePipeline: null,
      mortgageBrokers: [],

      pipelineValue: null, //DELETE
      stageValue: '1111111', //DELETE
    };
  },
  computed: {},

  watch: {
    stageValue(newVal, oldVal) { //DELETE
      console.debug('Mortgage::watcher[stageValue]', newVal, oldVal); //DELETE
    },
    pipelineValue(newVal, oldVal) { //DELETE
      console.debug('Mortgage::watcher[pipelineValue]', newVal, oldVal); //DELETE
    },
  },
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    deleteMortgage() {
      console.debug('Mortgage::deleteMortgage', this.mortgage); //DELETE

      this.$emit('delete', this.mortgage);
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug('Mortgage::created', this.pipelines); //DELETE
  },
  mounted() {
    console.debug('Mortgage::mounted', this.pipelines); //DELETE
  },
});
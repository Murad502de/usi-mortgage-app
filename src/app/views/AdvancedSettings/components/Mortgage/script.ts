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
      inited: false,
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
      amoMortgageCreationStageId: null,
      mortgageBrokers: [],
      amoMortgageApplyingStageId: null,
      amoMortgageApprovedStageId: null,

      pipelineValue: null, //DELETE
      stageValue: '1111111', //DELETE

      addPipelines: [],
      updatePipelines: [],
      deletePipelines: [],
    };
  },
  computed: {
    readPipelines() {
      if (this.stub) {
        return [];
      }

      return [
        ...this.mortgage.pipelines,
        ...this.addPipelines,
      ].filter((pipeline) => (!this.deletePipelines.includes(pipeline.uuid)));
    },
  },

  watch: {
    mortgagePipeline(newVal, oldVal) {
      console.debug('Mortgage/watch/mortgagePipeline/stub', this.stub); //DELETE
      console.debug('Mortgage/watch/amoMortgageCreationStageId/inited', this.inited); //DELETE
      console.debug('Mortgage/watch/mortgagePipeline/newVal', newVal); //DELETE
      console.debug('Mortgage/watch/mortgagePipeline/oldVal', oldVal); //DELETE

      if (this.isWatcherAvailable()) {
        return;
      }

      console.debug('Mortgage/watch/mortgagePipeline::run'); //DELETE

      console.debug('Mortgage/watch/amoMortgageCreationStageId::run'); //DELETE

      const mortgage = {
        ...this.mortgage,
        amo_mortgage_id: newVal.amo_id,
      };

      console.debug('Mortgage/watch/amoMortgageCreationStageId/mortgage', mortgage); //DELETE

      this.$emit('updateMortgage', mortgage);
    },
    amoMortgageCreationStageId(newVal, oldVal) {
      console.debug('Mortgage/watch/amoMortgageCreationStageId/stub', this.stub); //DELETE
      console.debug('Mortgage/watch/amoMortgageCreationStageId/inited', this.inited); //DELETE
      console.debug('Mortgage/watch/amoMortgageCreationStageId/newVal', newVal); //DELETE
      console.debug('Mortgage/watch/amoMortgageCreationStageId/oldVal', oldVal); //DELETE

      if (this.isWatcherAvailable()) {
        return;
      }

      console.debug('Mortgage/watch/amoMortgageCreationStageId::run'); //DELETE

      const mortgage = {
        ...this.mortgage,
        amo_mortgage_creation_stage_id: newVal,
      };

      console.debug('Mortgage/watch/amoMortgageCreationStageId/mortgage', mortgage); //DELETE

      this.$emit('updateMortgage', mortgage);
    },
    mortgageBrokers(newVal, oldVal) {
      console.debug('Mortgage/watch/mortgageBrokers/stub', this.stub); //DELETE
      console.debug('Mortgage/watch/mortgageBrokers/newVal', newVal); //DELETE
      console.debug('Mortgage/watch/mortgageBrokers/oldVal', oldVal); //DELETE

      if (this.isWatcherAvailable()) {
        return;
      }

      console.debug('Mortgage/watch/mortgageBrokers::run'); //DELETE

      const brokers = newVal;

      console.debug('Mortgage/watch/mortgageBrokers/mortgageNode', this.mortgage); //DELETE

      const mortgage = {
        ...this.mortgage,
        brokers: brokers.map(broker => broker.amo_id),
      };

      console.debug('Mortgage/watch/mortgageBrokers/mortgage', mortgage); //DELETE

      this.$emit('updateMortgage', mortgage);
    },
    amoMortgageApplyingStageId(newVal, oldVal) {
      console.debug('Mortgage/watch/amoMortgageApplyingStageId/stub', this.stub); //DELETE
      console.debug('Mortgage/watch/amoMortgageApplyingStageId/newVal', newVal); //DELETE
      console.debug('Mortgage/watch/amoMortgageApplyingStageId/oldVal', oldVal); //DELETE

      if (this.isWatcherAvailable()) {
        return;
      }

      console.debug('Mortgage/watch/amoMortgageApplyingStageId::run'); //DELETE

      const mortgage = {
        ...this.mortgage,
        amo_mortgage_applying_stage_id: newVal,
      };

      console.debug('Mortgage/watch/amoMortgageApplyingStageId/mortgage', mortgage); //DELETE

      this.$emit('updateMortgage', mortgage);
    },
    amoMortgageApprovedStageId(newVal, oldVal) {
      console.debug('Mortgage/watch/amoMortgageApprovedStageId/stub', this.stub); //DELETE
      console.debug('Mortgage/watch/amoMortgageApprovedStageId/newVal', newVal); //DELETE
      console.debug('Mortgage/watch/amoMortgageApprovedStageId/oldVal', oldVal); //DELETE

      if (this.isWatcherAvailable()) {
        return;
      }

      console.debug('Mortgage/watch/amoMortgageApprovedStageId::run'); //DELETE

      const mortgage = {
        ...this.mortgage,
        amo_mortgage_approved_stage_id: newVal,
      };

      console.debug('Mortgage/watch/amoMortgageApprovedStageId/mortgage', mortgage); //DELETE

      this.$emit('updateMortgage', mortgage);
    },
    deletePipelines(newVal, oldVal) {
      console.debug('Mortgage/watch/deletePipelines/stub', this.stub); //DELETE
      console.debug('Mortgage/watch/deletePipelines/values', newVal, oldVal); //DELETE

      if (this.isWatcherAvailable()) {
        return;
      }

      this.$store.dispatch('mortgage/setDeletePipelines', { pipelines: newVal, });
    },
    updatePipelines(newVal, oldVal) {
      console.debug('Mortgage/watch/updatePipelines/stub', this.stub); //DELETE
      console.debug('Mortgage/watch/updatePipelines/values', newVal, oldVal); //DELETE

      if (this.isWatcherAvailable()) {
        return;
      }

      this.$store.dispatch('mortgage/setUpdatePipelines', { pipelines: newVal, });
    },
  },
  methods: {
    /* GETTERS */
    getPipelineById(id) {
      console.debug('Mortgage/methods/getPipelineById', id); //DELETE

      if (!this.stub && this.pipelines.length) {
        return this.pipelines.find(pipeline => pipeline.amo_id === id) || null;
      }

      return null;
    },

    /* SETTERS */
    /* HANDLERS */
    deleteMortgage() {
      console.debug('Mortgage/methods/deleteMortgage', this.mortgage); //DELETE

      this.$emit('delete', this.mortgage);
    },
    /* FIXME: it is recommended to implement one generic method with inputAfterApplyingStages */
    inputBeforeApplyingStages(strStages) {
      console.debug('Mortgage/methods/inputBeforeApplyingStages', strStages); //DELETE

      const mortgage = {
        ...this.mortgage,
        amo_mortgage_before_applying_stage_ids: strStages.replaceAll(' ', '')
          .split(',')
          .map(stage => Number(stage)),
      };

      console.debug('Mortgage/methods/inputBeforeApplyingStages/mortgage', mortgage); //DELETE

      this.$emit('updateMortgage', mortgage);
    },
    /* FIXME: it is recommended to implement one generic method with inputBeforeApplyingStages */
    inputAfterApplyingStages(strStages) {
      console.debug('Mortgage/methods/inputAfterApplyingStages', strStages); //DELETE

      const mortgage = {
        ...this.mortgage,
        amo_mortgage_after_applying_stage_ids: strStages.replaceAll(' ', '')
          .split(',')
          .map(stage => Number(stage)),
      };

      console.debug('Mortgage/methods/inputAfterApplyingStages/mortgage', mortgage); //DELETE

      this.$emit('updateMortgage', mortgage);
    },
    addPipeline() {
      console.debug('Mortgage/methods/addPipeline'); //DELETE

      this.addPipelines = [...this.addPipelines, {
        uuid: new Date().getTime(),
        amo_pipeline_id: null,
        amo_pipeline_booking_stage_id: '',
      }];
    },
    updatePipeline(data) {
      console.debug('Mortgage/methods/updatePipeline', data); //DELETE

      const index = this.updatePipelines.findIndex(pipeline => pipeline.uuid === data.uuid);
      const pipeline = {
        uuid: data.uuid,
        amo_pipeline_id: data.pipeline?.amo_id,
        amo_pipeline_booking_stage_id: data.stage,
      };

      if (index !== -1) {
        // console.debug('Mortgage::updatePipeline[have]', pipeline); //DELETE

        this.updatePipelines = this.updatePipelines.map((updatePipeline, updatePipelineIndex) => {
          if (updatePipelineIndex === index) {
            return { ...pipeline };
          }

          return { ...updatePipeline };
        });
      } else {
        // console.debug('Mortgage::updatePipeline[dont have]', pipeline); //DELETE

        this.updatePipelines = [...this.updatePipelines, pipeline];
      }

      // console.debug('Mortgage::updatePipeline[updatePipelines]', this.updatePipelines); //DELETE
    },
    deletePipeline(pipeline) {
      console.debug('Mortgage/methods/deletePipeline', pipeline); //DELETE

      this.deletePipelines = [
        ...this.deletePipelines,
        pipeline.uuid,
      ];
      this.updatePipelines = this.updatePipelines.filter(
        updatePipeline => updatePipeline.uuid !== pipeline.uuid
      );
    },

    /* HELPERS */
    isWatcherAvailable() {
      console.debug('Mortgage/methods/isWatcherAvailable'); //DELETE

      return this.stub || !this.inited;
    },

    /* ACTIONS */
    async init() {
      console.debug('Mortgage/methods/init'); //DELETE

      if (!this.stub) { /* FIXME: implement as a service method */
        if (this.pipelines.length) { /* FIXME: implement as a service method */
          const pipeline = this.pipelines.find(
            pipeline => pipeline.amo_id === this.mortgage.amo_mortgage_id
          );

          this.mortgagePipeline = pipeline || null;
        }

        if (this.brokers.length) { /* FIXME: implement as a service method */
          this.mortgage.brokers.forEach(brokerId => {
            const broker = this.brokers.find(broker => broker.amo_id === brokerId);

            if (broker) {
              this.mortgageBrokers.push(broker);
            }
          });
        }

        this.amoMortgageCreationStageId = this.mortgage.amo_mortgage_creation_stage_id;
        this.amoMortgageApplyingStageId = this.mortgage.amo_mortgage_applying_stage_id;
        this.amoMortgageApprovedStageId = this.mortgage.amo_mortgage_approved_stage_id;
      }
    },
  },

  async created() {
    console.debug('Mortgage/created', this.stub, this.pipelines, this.brokers, this.mortgage); //DELETE

    await this.init();

    this.inited = true;
  },
  async mounted() {
    console.debug('Mortgage/mounted', this.stub, this.pipelines, this.brokers, this.mortgage); //DELETE
  },
});
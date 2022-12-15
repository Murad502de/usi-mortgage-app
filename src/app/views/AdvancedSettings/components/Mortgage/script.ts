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
    mortgageBrokers(newVal, oldVal) {
      console.debug('Mortgage::watch[mortgageBrokers]', newVal, oldVal); //DELETE

      const brokers = newVal;

      this.$store.dispatch('mortgage/setBrokers', {
        uuid: this.mortgage.uuid,
        brokers: brokers.map(broker => broker.amo_id),
      });
    },
    deletePipelines(newVal, oldVal) {
      console.debug('Mortgage::watch[deletePipelines]', newVal); //DELETE

      this.$store.dispatch('mortgage/setDeletePipelines', { pipelines: newVal, });
    },
    updatePipelines(newVal, oldVal) {
      console.debug('Mortgage::watch[updatePipelines]', newVal); //DELETE

      this.$store.dispatch('mortgage/setUpdatePipelines', { pipelines: newVal, });
    },
  },
  methods: {
    /* GETTERS */
    getPipelineById(id) {
      if (!this.stub && this.pipelines.length) {
        return this.pipelines.find(pipeline => pipeline.amo_id === id) || null;
      }

      return null;
    },

    /* SETTERS */
    /* HANDLERS */
    deleteMortgage() {
      // console.debug('Mortgage::deleteMortgage', this.mortgage); //DELETE

      this.$emit('delete', this.mortgage);
    },
    /* FIXME: it is recommended to implement one generic method with inputAfterApplyingStages */
    inputBeforeApplyingStages(strStages) {
      console.debug('Mortgage::inputBeforeApplyingStages', strStages); //DELETE

      this.$store.dispatch('mortgage/setBeforeApplyingStages', {
        uuid: this.mortgage.uuid,
        stages: strStages.replaceAll(' ', '')
          .split(',')
          .map(stage => Number(stage)),
      });
    },
    /* FIXME: it is recommended to implement one generic method with inputBeforeApplyingStages */
    inputAfterApplyingStages(strStages) {
      console.debug('Mortgage::inputAfterApplyingStages', strStages); //DELETE

      this.$store.dispatch('mortgage/setAfterApplyingStages', {
        uuid: this.mortgage.uuid,
        stages: strStages.replaceAll(' ', '')
          .split(',')
          .map(stage => Number(stage)),
      });
    },
    addPipeline() {
      console.debug('Mortgage::addPipeline'); //DELETE

      this.addPipelines = [...this.addPipelines, {
        uuid: new Date().getTime(),
        amo_pipeline_id: null,
        amo_pipeline_booking_stage_id: '',
      }];
    },
    updatePipeline(data) {
      console.debug('Mortgage::updatePipeline', data); //DELETE

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
      console.debug('Mortgage::deletePipeline', pipeline); //DELETE

      this.deletePipelines = [
        ...this.deletePipelines,
        pipeline.uuid,
      ];
      this.updatePipelines = this.updatePipelines.filter(
        updatePipeline => updatePipeline.uuid !== pipeline.uuid
      );
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug('Mortgage::created', this.stub, this.pipelines, this.brokers, this.mortgage); //DELETE

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
    }
  },
  mounted() { },
});
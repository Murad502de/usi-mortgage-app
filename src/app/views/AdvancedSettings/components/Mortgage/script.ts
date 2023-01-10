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
    };
  },
  computed: {
    addPipelines() {
      const pipelines = this.$store
        .getters["mortgage/addPipelines"]
        .find(pipeline => pipeline.uuid === this.$.vnode.key);

      return pipelines ? pipelines.pipelines : [];
    },
    updatePipelines() {
      const pipelines = this.$store
        .getters["mortgage/updatePipelines"]
        .find(pipeline => pipeline.uuid === this.$.vnode.key);

      return pipelines ? pipelines.pipelines : [];
    },
    deletePipelines() {
      const pipelines = this.$store
        .getters["mortgage/deletePipelines"]
        .find(pipeline => pipeline.uuid === this.$.vnode.key);

      return pipelines ? pipelines.pipelines : [];
    },
    readPipelines() {
      if (this.stub) {
        return [];
      }

      console.debug('Mortgage/computed/readPipelines/addPipelines', this.addPipelines); //DELETE

      return [
        ...this.mortgage.pipelines,
        ...this.addPipelines,
      ].filter((pipeline) => (!this.deletePipelines.includes(pipeline.uuid)));
    },
    beforeApplyingStagesValue() {
      console.debug('Mortgage/computed/beforeApplyingStagesValue/mortgage', this.mortgage); //DELETE

      return this.mortgage.amo_mortgage_before_applying_stage_ids?.join(',');
    },
    afterApplyingStages() {
      console.debug('Mortgage/computed/afterApplyingStages/mortgage', this.mortgage); //DELETE

      return this.mortgage.amo_mortgage_after_applying_stage_ids?.join(',');
    },
  },

  watch: {
    async mortgage(newVal, oldVal) {
      console.debug('Mortgage/watch/mortgage/stub', this.stub); //DELETE
      console.debug('Mortgage/watch/mortgage/inited', this.inited); //DELETE
      console.debug('Mortgage/watch/mortgage/newVal', newVal); //DELETE
      console.debug('Mortgage/watch/mortgage/oldVal', oldVal); //DELETE

      if (this.isWatcherAvailable()) {
        return;
      }

      console.debug('Mortgage/watch/mortgage/run'); //DELETE

      this.inited = false;

      await this.init();

      this.inited = true;
    },
    mortgagePipeline(newVal, oldVal) {
      console.debug('Mortgage/watch/mortgagePipeline/stub', this.stub); //DELETE
      console.debug('Mortgage/watch/mortgagePipeline/inited', this.inited); //DELETE
      console.debug('Mortgage/watch/mortgagePipeline/newVal', newVal); //DELETE
      console.debug('Mortgage/watch/mortgagePipeline/oldVal', oldVal); //DELETE

      if (this.isWatcherAvailable()) {
        return;
      }

      console.debug('Mortgage/watch/mortgagePipeline::run'); //DELETE

      const mortgage = {
        ...this.mortgage,
        amo_mortgage_id: newVal.amo_id,
      };

      console.debug('Mortgage/watch/mortgagePipeline/mortgage', mortgage); //DELETE

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
    readPipelines(newVal, oldVal) { //DELETE
      console.debug('Mortgage/watch/readPipelines/stub', this.stub); //DELETE
      console.debug('Mortgage/watch/readPipelines/newVal', newVal); //DELETE
      console.debug('Mortgage/watch/readPipelines/oldVal', oldVal); //DELETE
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
      console.debug(
        'Mortgage/methods/inputBeforeApplyingStages/strStages',
        strStages.replaceAll(' ', '').split(',').filter(stage => !!stage).map(stage => Number(stage))
      ); //DELETE

      const mortgage = {
        ...this.mortgage,
        amo_mortgage_before_applying_stage_ids: strStages.replaceAll(' ', '')
          .split(',')
          .filter(stage => !!stage)
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

      this.$store.dispatch('mortgage/setAddPipelines', {
        uuid: this.$.vnode.key,
        pipelines: [...this.addPipelines, {
          uuid: new Date().getTime(), //FIXME
          amo_pipeline_id: null,
          amo_pipeline_booking_stage_id: '',
        }],
      });
    },
    updatePipeline(data) {
      console.debug('Mortgage/methods/updatePipeline', data); //DELETE

      const isNew = !!this.addPipelines.find(pipeline => pipeline.uuid === data.uuid);
      const pipeline = {
        uuid: data.uuid,
        amo_pipeline_id: data.pipeline?.amo_id,
        amo_pipeline_booking_stage_id: data.stage,
      };

      if (!isNew) {
        console.debug('Mortgage/methods/updatePipeline/notNew'); //DELETE

        const index = this.updatePipelines.findIndex(pipeline => pipeline.uuid === data.uuid);

        if (index !== -1) {
          console.debug('Mortgage/methods/updatePipeline/have', pipeline); //DELETE

          this.$store.dispatch('mortgage/setUpdatePipelines', {
            uuid: this.$.vnode.key,
            pipelines: this.updatePipelines.map((updatePipeline, updatePipelineIndex) => {
              if (updatePipelineIndex === index) {
                return { ...pipeline };
              }

              return { ...updatePipeline };
            }),
          });
        } else {
          console.debug('Mortgage/methods/updatePipeline/dontHave', pipeline); //DELETE

          this.$store.dispatch('mortgage/setUpdatePipelines', {
            uuid: this.$.vnode.key,
            pipelines: [...this.updatePipelines, pipeline],
          });
        }

        console.debug('Mortgage/methods/updatePipeline/updatePipelines', this.updatePipelines); //DELETE
      } else {
        console.debug('Mortgage/methods/updatePipeline/new'); //DELETE

        this.$store.dispatch('mortgage/setAddPipelines', {
          uuid: this.$.vnode.key,
          pipelines: this.addPipelines.map((addPipeline) => {
            if (addPipeline.uuid === pipeline.uuid) {
              return { ...pipeline };
            }

            return { ...addPipeline };
          }),
        });
      }
    },
    deletePipeline(pipeline) {
      console.debug('Mortgage/methods/deletePipeline', pipeline); //DELETE

      const fromAddPipelines = this.addPipelines.find(addPipeline => addPipeline.uuid === pipeline.uuid);

      if (fromAddPipelines) {
        console.debug('Mortgage/methods/fromAddPipelines'); //DELETE

        this.$store.dispatch('mortgage/setAddPipelines', {
          uuid: this.$.vnode.key,
          pipelines: this.addPipelines.filter(
            addPipeline => addPipeline.uuid !== pipeline.uuid
          ),
        });
      } else {
        console.debug('Mortgage/methods/notFromAddPipelines'); //DELETE

        this.$store.dispatch('mortgage/setDeletePipelines', {
          uuid: this.$.vnode.key,
          pipelines: [
            ...this.deletePipelines,
            pipeline.uuid,
          ],
        });

        this.$store.dispatch('mortgage/setUpdatePipelines', {
          uuid: this.$.vnode.key,
          pipelines: this.updatePipelines.filter(
            updatePipeline => updatePipeline.uuid !== pipeline.uuid
          ),
        });
      }
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
          this.mortgageBrokers = [];

          this.mortgage.brokers.forEach(brokerId => {
            const broker = this.brokers.find(broker => Number(broker.amo_id) === Number(brokerId));

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
    console.debug('Mortgage/created/stub', this.stub); //DELETE
    console.debug('Mortgage/created/pipelines', this.pipelines); //DELETE
    console.debug('Mortgage/created/brokers', this.brokers); //DELETE
    console.debug('Mortgage/created/mortgage', this.mortgage); //DELETE

    await this.init();

    this.inited = true;
  },
  async mounted() {
    console.debug('Mortgage/mounted', this.stub, this.pipelines, this.brokers, this.mortgage); //DELETE
  },
});
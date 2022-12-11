import { defineComponent } from "vue";
import { mapActions } from 'vuex'
import { teleport } from '@/app/utils/teleport';
import Header from './components/Header/index.vue';
import Main from './components/Main/index.vue';
import Modal from '@components/TheModal/index.vue';
import ModalActions from "@components/composite/ResultActions/index.vue";

export default defineComponent({
  components: {
    Header,
    Main,
    Modal,
    ModalActions,
  },

  props: {},
  data: () => {
    return {
      modalVisibility: false,
      mortgages: [],
    };
  },
  computed: {
    workArea() {
      return this.$store.getters["widget/params"].widget_code
        ? `#work-area-${this.$store.getters["widget/params"].widget_code}`
        : null;
    },
    stub() {
      return !this.mortgages.length;
    },
  },

  watch: {
    workArea(newWorkArea, oldWorkArea) {
      if (newWorkArea) {
        console.debug('AdvancedSettings::watch[workArea]', newWorkArea, oldWorkArea); //DELETE

        teleport({
          toSelector: newWorkArea,
          elementSelector: ".usi-mortgage--advanced-settings",
        });
      }
    },
  },
  methods: {
    /* STORE */
    ...mapActions('dictionaries', {
      fetchUsersDictionary: 'fetchUsers',
      fetchPipelinesDictionary: 'fetchPipelines',
    }),
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    cancel() {
      console.debug('AdvancedSettings::cancel'); //DELETE
      console.debug('AdvancedSettings << open modal'); //DELETE

      this.modalVisibility = true;
    },
    save() {
      console.debug('AdvancedSettings::save'); //DELETE
    },
    closeModal() {
      this.modalVisibility = false;
    },
    saveModal() {
      this.modalVisibility = false;
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug('advancedSettings::created', this); //DELETE

    this.fetchUsersDictionary();
    this.fetchPipelinesDictionary();
  },
  mounted() {
    setTimeout(() => {
      this.mortgages = [
        {
          uuid: 'asd2-12sse-12de1',
          mortgagePipeline: {
            id: 23412341,
            name: 'Ипотека 1'
          },
          idCreationLeadStage: 12434321,
        },
        {
          uuid: 'asd2-12sse-12de2',
          mortgagePipeline: {
            id: 23412341,
            name: 'Ипотека 2'
          },
          idCreationLeadStage: 12434321,
        },
      ];
    }, 5000);
  },
});
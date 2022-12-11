import { defineComponent } from "vue";
import Icon from '@components/ui-embedded/Icon/index.vue';
import Skeleton from '@components/ui-embedded/Skeleton/index.vue';

export default defineComponent({
  components: {
    Icon,
    Skeleton,
  },

  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    items: {
      type: [Array, Object],
      default: () => [],
    },
    valueProp: {
      type: String,
      default: null
    },
    theme: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: '280'
    },
    label: {
      type: String,
      default: '',
    },
    stub: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showList: false,
      vcoSettings: {
        handler: this.hide,
        events: ['mousedown'],
        isActive: true,
        detectIFrame: true,
        capture: false,
      },
    };
  },
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    toggle() {
      this.showList = !this.showList;
    },
    hide() {
      this.showList = false;
    },
    selectItem(index) {
      console.debug('uiSelect::selectItem', index, this.items[index]); //DELETE

      this.$emit('update:modelValue', this.items[index]);
      this.hide();
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug('uiSelect::created', this.items); //DELETE
  },
  mounted() {
    console.debug('uiSelect::mounted', this.items); //DELETE
  },
});
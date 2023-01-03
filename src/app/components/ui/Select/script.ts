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
      type: [Array, Object],
      default: '',
    },
    items: {
      type: [Array, Object],
      default: () => [],
    },
    value: {
      type: [Array, Object],
      default: '',
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
    multiple: {
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
  computed: {
    bufferItems() {
      // console.debug('bufferItems', this.modelValue); //DELETE

      if (this.multiple && this.modelValue) {
        // console.debug('bufferItems[multiple][modelValue]', this.modelValue); //DELETE

        return this.items.map((item) => {
          let have = this.modelValue.find(value => value.uuid === item.uuid);

          if (have) {
            // console.debug('bufferItems[have]'); //DELETE

            return {
              ...item,
              selected: true,
            };
          }

          // console.debug('bufferItems[dont have]'); //DELETE

          return {
            ...item,
            selected: false,
          };
        });
      }

      // console.debug('bufferItems[default]'); //DELETE

      return this.items.map((item) => ({
        ...item,
        selected: item.uuid === this.modelValue?.uuid,
      }));
    },
  },

  watch: {},
  methods: {
    /* GETTERS */
    getSelected() {
      if (this.modelValue) {
        if (this.multiple) {
          if (this.modelValue.length) {
            return `${this.modelValue[0].name || this.modelValue[0].value}${this.modelValue.length > 1 ? ' + ' + (this.modelValue.length - 1) : ''}`;
          }
        } else {
          return this.modelValue.name || this.modelValue.value || this.modelValue;
        }
      }

      return "Выбрать";
    },

    /* SETTERS */
    /* HANDLERS */
    toggle() {
      this.showList = !this.showList;
    },
    hide() {
      this.showList = false;
    },
    selectItem(index) {
      console.debug('uiSelect/selectItem', index, this.items[index]); //DELETE

      if (!this.items[index].blocked) {
        console.debug('uiSelect/selectItem/change', index, this.items[index]); //DELETE

        if (this.multiple) {
          console.debug('uiSelect/selectItem/change/multiple', index, this.items[index]); //DELETE

          let have = this.modelValue.find(item => item.uuid === this.items[index].uuid);

          if (have) {
            this.$emit('update:modelValue', [...this.modelValue.filter(item => item.uuid !== this.items[index].uuid)]);
          } else {
            this.$emit('update:modelValue', [...this.modelValue, this.items[index]]);
          }
        } else {
          console.debug('uiSelect/selectItem/change/single', index, this.items[index]); //DELETE

          this.$emit('update:modelValue', this.items[index]);
          this.$emit('selectItem', this.items[index]);
          this.hide();
        }
      } else {
        console.debug('uiSelect/selectItem/not-change', index, this.items[index]); //DELETE
      }
    },

    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug('uiSelect::created', this.items, this.value, this.modelValue); //DELETE
  },
  mounted() {
    console.debug('uiSelect::mounted', this.items); //DELETE
  },
});
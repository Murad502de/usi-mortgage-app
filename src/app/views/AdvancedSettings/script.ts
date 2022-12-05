import { defineComponent } from "vue";
import { teleport } from '@/app/utils/teleport';
import MortgageCard from '@components/ui/Card/index.vue';

export default defineComponent({
  // name: "Button",
  components: {
    MortgageCard,
  },

  props: {},
  data: () => {
    return {
      count: 0,
    };
  },
  computed: {
    workArea() {
      return this.$store.getters["widget/params"].widget_code
        ? `#work-area-${this.$store.getters["widget/params"].widget_code}`
        : null;
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
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    testClick() {
      this.count++;
    },
    /* HELPERS */
    /* ACTIONS */
  },

  created() { },
  mounted() { },
});

// export default {
//   components: {
//     MortgageCard,
//   },

//   props: {},
//   data: () => {
//     return {
//       count: 0,
//     };
//   },
//   computed: {
//     workArea() {
//       return this.$store.getters["widget/params"].widget_code
//         ? `#work-area-${this.$store.getters["widget/params"].widget_code}`
//         : null;
//     },
//   },

//   watch: {
//     workArea(newWorkArea, oldWorkArea) {
//       if (newWorkArea) {
//         console.debug('AdvancedSettings::watch[workArea]', newWorkArea, oldWorkArea); //DELETE

//         teleport({
//           toSelector: newWorkArea,
//           elementSelector: ".usi-mortgage--advanced-settings",
//         });
//       }
//     },
//   },
//   methods: {
//     /* GETTERS */
//     /* SETTERS */
//     /* HANDLERS */
//     testClick() {
//       this.count++;
//     },
//     /* HELPERS */
//     /* ACTIONS */
//   },

//   created() { },
//   mounted() { },
// };
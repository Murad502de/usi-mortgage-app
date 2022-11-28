<template lang="pug">
.usi-mortgage--advanced-settings(
  @click="testClick"
) USI advanced-settings page {{ workArea }} : {{ count }}
</template>

<script>
import { teleport } from "@/utils/teleport";

export default {
  components: {},

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

  created() {},
  mounted() {},
};
</script>

<style lang="scss">
</style>
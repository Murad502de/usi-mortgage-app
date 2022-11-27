<template lang="pug">
.usi-mortgage--widget-settings vue usi mortgage widget settings with PUG
  .test qwertyuio
</template>

<script>
export default {
  components: {},

  props: {},
  data: () => ({}),
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug("WidgetSettings << created"); //DELETE

    console.debug('THiS', this.$apiGatewayDefault); //DELETE
  },
  mounted() {
    console.debug("WidgetSettings << mounted"); //DELETE

    console.debug('THiS mounted', this.$apiGatewayDefault); //DELETE
  },
}
</script>

<style lang="scss">
.usi-mortgage--widget-settings {
  .test {
    color: red;
  }
}
</style>
<template lang="pug">
.usi-mortgage--leadscard
  .usi-mortgage--leadscard__mortgage-btn MORTGAGE_BUTTON
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
    console.debug("LeadsCard << created"); //DELETE
  },
  mounted() {
    console.debug("LeadsCard << mounted"); //DELETE
  },
}
</script>

<style lang="scss">
.usi-mortgage--leadscard {
  &__mortgage-btn {
    color: red;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
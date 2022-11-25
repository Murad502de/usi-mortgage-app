<template lang="pug">
.usi-mortgage--leadscard
  MortgageButton {{ mortgageButtonTitle }} : {{ mortgageBtnShow }}
</template>

<script>
import MortgageButton from "@/components/ui/Button";

export default {
  components: {
    MortgageButton,
  },

  props: {},
  data: () => {
    return {
      mortgageButtonTitle: "HYPOTHEK BTN 2022",
    };
  },
  computed: {
    mortgageBtnShow() {
      return document.querySelector('div[data-id="685555"] .icon-radio-checked input')?.value;
    },
  },

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
};
</script>

<style lang="scss">
.usi-mortgage--leadscard {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>
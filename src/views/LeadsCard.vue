<template lang="pug">
.usi-mortgage--leadscard
  MortgageButton(v-show="mortgageBtnShow") {{ mortgageButtonTitle }}
</template>

<script>
import debounce from "@/utils/debounce";
import MortgageButton from "@/components/ui/Button";

export default {
  components: {
    MortgageButton,
  },

  props: {},
  data: () => {
    return {
      mortgageButtonTitle: "HYPOTHEK BTN 2022",
      mortgageBtnShow: false,
    };
  },
  computed: {},

  watch: {},
  methods: {
    /* GETTERS */
    /* SETTERS */
    /* HANDLERS */
    selectMortgage: debounce(function () {
      console.debug("selectMortgage", this);

      this.mortgageBtnShow = Number(document.querySelector('div[data-id="685555"] .icon-radio-checked input')?.value) === 319719;
    }, 100),
    /* HELPERS */
    /* ACTIONS */
  },

  created() {
    console.debug("LeadsCard << created"); //DELETE

    document.querySelector('div[data-id="685555"]').addEventListener("click", this.selectMortgage);
  },
  mounted() {
    console.debug("LeadsCard << mounted"); //DELETE
  },
  unmounted() {
    console.debug("LeadsCard << unmounted"); //DELETE

    document.querySelector('div[data-id="685555"]').removeEventListener("click", this.selectMortgage);
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
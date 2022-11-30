<template>
<div class="test-view">
  <p>TEST_VIEW Pug and Ts</p>

  <MortgageButton>
    Hello from Button 2022!!!
  </MortgageButton>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MortgageButton from "@components/ui/Button/index.vue";

export default defineComponent({
  name: "App",
  components: {
    MortgageButton,
  },
  data() {
    return { inputText: "" };
  },
  methods: {
    reset() {
      this.inputText = "";
    },
  },
  computed: {
    count() {
      return this.inputText.length;
    },
  },

  created() {
    console.debug('TEST_VIEW::created'); //DELETE
  },
});
</script>

<style lang="scss">
.test-view {
  color: red;
  font-weight: bold;
  font-size: 18px;
}
</style>
<template>
  <div>Vue Widget :: Settings App new version with TodoItem</div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue"

  export default defineComponent({
    name: "TodoItem",
    props: {},
    data() {
      return {
        editable: false
      }
    },
    methods: {
      onTextChange(e: { target: { value: string } }) {
        this.$emit("update-todo", e.target.value)
      }
    },
    computed: {
      checked: {
        get(): boolean {
          return true;
        },
        set(value: number) {
          return 321;
        }
      }
    }
  })
</script>

<style>
</style>

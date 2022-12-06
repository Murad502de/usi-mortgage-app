<template>
  <div class="usi-mortgage--card">
    <template v-if="loader" />

    <template v-else>
      <slot name="default" />
    </template>
  </div>
</template>

<script lang="ts" src="./script.js" />
<style lang="scss" src="./styles.scss" />
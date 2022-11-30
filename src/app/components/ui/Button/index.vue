<template>
<div class="um-button" :class="[{ 'mt-button_load': loader }, color ? `um-button_${color}` : '']">
  <template v-if="loader"></template>

  <template v-else>
    <slot name="default" />
  </template>
</div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
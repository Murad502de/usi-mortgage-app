<template>
  <div class="um-button" :class="classes">
    <template v-if="loader">
      <Icon name="LoaderAnimated" color="#2E3640" />
    </template>

    <template v-else>
      <slot name="default" />
    </template>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
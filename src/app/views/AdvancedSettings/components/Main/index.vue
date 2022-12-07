<template>
  <div class="usi-mortgage--advanced-settings__main">
    <Mortgage v-if="!mortgages.length" class="usi-mortgage--advanced-settings__main--card" />

    <div v-else>
      <Mortgage class="usi-mortgage--advanced-settings__main--card" />
      <Mortgage class="usi-mortgage--advanced-settings__main--card" />
      <Mortgage class="usi-mortgage--advanced-settings__main--card" />
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
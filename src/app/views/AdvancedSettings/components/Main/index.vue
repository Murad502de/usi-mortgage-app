<template>
  <div class="usi-mortgage--advanced-settings__main">
    <Mortgage
      v-if="stub"
      class="usi-mortgage--advanced-settings__main--card"
      :stub="stub"
    />
    <Mortgage
      v-else
      class="usi-mortgage--advanced-settings__main--card"
      v-for="mortgage in mortgages"
      :key="mortgage.uuid"
    />
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
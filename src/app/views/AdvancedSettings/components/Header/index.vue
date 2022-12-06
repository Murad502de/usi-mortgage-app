<template>
  <div class="usi-mortgage--advanced-settings__header">
    <Button>
      {{ addMortgageTitle }}
    </Button>

    <ResultActions :cancelVisibility="true" :cancelDisabled="false" :saveDisabled="false" @save="save" @cancel="cancel" />
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
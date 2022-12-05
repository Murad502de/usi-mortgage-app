<template>
  <div class="usi-mortgage--advanced-settings__header">
    <Button>
      {{ addMortgageTitle }}
    </Button>

    <ResultActions :cancelVisibility="false" :saveDisabled="true" />
  </div>
</template>

<script src="./script.ts" />
<style lang="scss" src="./styles.scss" />
<template>
  <div class="usi-mortgage--advanced-settings__header">
    <Button :disabled="addDisabled" @click="add">
      {{ addMortgageTitle }}
    </Button>

    <ResultActions
      :cancelVisibility="cancelVisibility"
      :cancelDisabled="cancelDisabled"
      :saveDisabled="saveDisabled"
      @save="save"
      @cancel="cancel"
    />
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
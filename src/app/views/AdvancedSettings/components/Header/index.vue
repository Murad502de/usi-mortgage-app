<template>
  <div class="usi-mortgage--advanced-settings__header">
    <Button :disabled="stub" @click="add">
      {{ addMortgageTitle }}
    </Button>

    <ResultActions
      :cancelVisibility="true && !stub"
      :cancelDisabled="false || stub"
      :saveDisabled="false || stub"
      @save="save"
      @cancel="cancel"
    />
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
<template>
  <div class="um-result-actions">
    <Button
      v-show="cancelVisibility"
      class="um-result-actions__button um-result-actions__button-cancel"
      color="default"
      :disabled="cancelDisabled || loader"
      @click="cancel"
    >
      {{ cancelBtnTitle }}
    </Button>

    <Button
      v-show="saveVisibility"
      class="um-result-actions__button um-result-actions__button-save"
      :disabled="saveDisabled || loader"
      :loader="loader"
      @click="save"
    >
      {{ saveBtnTitle }}
    </Button>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
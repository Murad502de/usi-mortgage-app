<template>
  <div class="um-result-actions">
    <Button v-show="cancelVisibility" class="um-result-actions__button um-result-actions__button-cancel" color="default" :disabled="cancelDisabled">
      {{ cancelBtnTitle }}
    </Button>

    <Button v-show="saveVisibility" class="um-result-actions__button um-result-actions__button-save" :disabled="saveDisabled">
      {{ saveBtnTitle }}
    </Button>
  </div>
</template>

<script src="./script.ts" />
<style lang="scss" src="./styles.scss" />
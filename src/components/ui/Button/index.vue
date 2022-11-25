<template lang="pug">
.um-button(
  :class="[{ 'mt-button_load': loader }, color ? `um-button_${color}` : '']"
  @click="click"
)
  template(v-if="loader")
    //- Icon(name="loader" fill="#fff" loader)

  template(v-else)
    slot(name="default")
</template>

<script src="./script.js" />
<style lang="scss" src="./styles.scss" />
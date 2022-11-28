<template lang="pug">
.usi-mortgage--card
  template(v-if="loader")

  template(v-else)
    slot(name="default")
</template>

<script src="./script.js" />
<style lang="scss" src="./styles.scss" />
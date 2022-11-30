<template lang="pug">
.usi-mortgage--leadscard
  teleport(to='#usi-mortgage-app--button')
    MortgageButton(v-show="mortgageBtnShow") {{ mortgageButtonTitle }}
</template>

<script src="./script.js" />
<style lang="scss" src="./styles.scss" />
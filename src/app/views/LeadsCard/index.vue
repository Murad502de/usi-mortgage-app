<template>
  <div class="usi-mortgage--leadscard">
    <teleport to="#usi-mortgage-app--button">
      <MortgageButton v-show="mortgageBtnShow">
        {{ mortgageButtonTitle }}
      </MortgageButton>
    </teleport>
  </div>
</template>

<script src="./script.js" />
<style lang="scss" src="./styles.scss" />
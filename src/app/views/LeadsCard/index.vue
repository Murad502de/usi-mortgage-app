<template>
  <div class="usi-mortgage--leadscard">
    <teleport to="#usi-mortgage-app--button">
      <MortgageButton
        class="usi-mortgage--leadscard__lead-button"
        v-show="isLeadAuthorized && isLeadMortgage"
        @click="goToRelatedLead()"
        :loader="btnRedirectLoader"
      >
        {{ goToBasicLeadTitle }}
      </MortgageButton>

      <MortgageButton
        class="usi-mortgage--leadscard__lead-button"
        v-show="isLeadAuthorized && !isLeadMortgage"
        @click="goToRelatedLead()"
        :loader="btnRedirectLoader"
      >
        {{ goToMortgageLeadTitle }}
      </MortgageButton>

      <MortgageButton
        class="usi-mortgage--leadscard__lead-button"
        v-show="isPipelineAuthorized && mortgageBtnShow"
        :loader="btnRedirectLoader"
      >
        {{ createMortgageLeadTitle }}
      </MortgageButton>
    </teleport>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
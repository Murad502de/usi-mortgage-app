<template>
  <div class="usi-mortgage--leadscard">
    <teleport to="#usi-mortgage-app--button">
      <MortgageButton
        class="usi-mortgage--leadscard__lead-button"
        v-show="isLeadAuthorized && isLeadMortgage"
        :loader="btnRedirectLoader"
        @click="goToRelatedLead"
      >
        {{ goToBasicLeadTitle }}
      </MortgageButton>

      <MortgageButton
        class="usi-mortgage--leadscard__lead-button"
        v-show="isLeadAuthorized && !isLeadMortgage"
        :loader="btnRedirectLoader"
        @click="goToRelatedLead"
      >
        {{ goToMortgageLeadTitle }}
      </MortgageButton>

      <MortgageButton
        class="usi-mortgage--leadscard__lead-button"
        v-show="isPipelineAuthorized && !isLeadAuthorized && mortgageBtnShow"
        :loader="btnRedirectLoader"
        @click="addMortgage"
      >
        {{ createMortgageLeadTitle }}
      </MortgageButton>
    </teleport>

    <Modal
      teleportTo="#card_holder"
      class="usi-mortgage--leadscard-modal"
      :visibility="modalVisibility"
      @close="closeModal"
    >
      <div class="usi-mortgage--leadscard-modal--body">
        <ActionsView
          v-show="activeModalView === 'ActionsView'"
          @yes="actionsViewYes"
          @consultation="actionsViewConsultation"
          @cancel="closeModal"
        />
        <SettingsView
          v-show="activeModalView === 'SettingsView'"
          :brokers="brokers"
          @selectBroker="createMortgage"
        />
      </div>
    </Modal>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
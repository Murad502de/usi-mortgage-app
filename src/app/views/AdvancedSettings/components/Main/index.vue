<template>
  <div class="usi-mortgage--advanced-settings__main">
    <Mortgage
      v-if="stub"
      class="usi-mortgage--advanced-settings__main--card"
      :stub="stub"
    />
    <Mortgage
      v-else
      class="usi-mortgage--advanced-settings__main--card"
      v-for="mortgage in mortgages"
      :key="mortgage.uuid || mortgage.id"
      :mortgage="mortgage"
      :pipelines="pipelines"
      :brokers="brokers"
      @delete="deleteMortgage"
      @updateMortgage="updateMortgage"
    />

    <Card
      v-if="!stub && !mortgages.length"
      class="
        usi-mortgage--advanced-settings__main--card
        usi-mortgage--advanced-settings__main--card_empty
      "
    >
      Ипотечные узлы не обнаружены
    </Card>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
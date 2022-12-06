<template>
  <Card class="usi-mortgage--advanced-settings__mortgage">
    <Icon
      class="usi-mortgage--advanced-settings__mortgage--close"
      name="close"
      color="#CCC8C8"
    />
    <div class="usi-mortgage--advanced-settings__mortgage--title">
      {{ cardTitel }}
    </div>
    <div class="usi-mortgage--advanced-settings__mortgage--main">
      <div class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline">
        <div class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__pipeline"></div>
        <div class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages">
          <div class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--title">
            {{mortgageStagesTitle}}
          </div>
          <div class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--item"></div>
        </div>
      </div>
      <div class="usi-mortgage--advanced-settings__mortgage--pipelines"></div>
    </div>
  </Card>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
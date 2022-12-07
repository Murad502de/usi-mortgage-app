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
        <div class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__pipeline">
          <Select class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__pipeline--select" :label="mortgagePipelineTitle" />
          <TextField class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__pipeline--textfield" :label="idCreationLeadStage" />
        </div>

        <div class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages">
          <div class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--title">
            {{mortgageStagesTitle}}
          </div>

          <div class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--rows">
            <div class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row">
              <TextField class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row-item" :label="idApplyingStageTitle" />
              <TextField class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row-item" :label="idsBeforeApplyingStageTitle" width="285" />
              <TextField class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row-item" :label="idsAfterApplyingStageTitle" width="310" />
            </div>

            <div class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row">
              <TextField class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row-item" :label="idMortgageApprovedStageTitle" />
            </div>
          </div>
        </div>
      </div>

      <div class="usi-mortgage--advanced-settings__mortgage--pipelines">
        <Button class="usi-mortgage--advanced-settings__mortgage--pipelines__add">
          {{ addNewPipelineTitle }}
        </Button>

        <div class="usi-mortgage--advanced-settings__mortgage--pipelines__items">
          <div class="usi-mortgage--advanced-settings__mortgage--pipelines__item">
            <Select class="usi-mortgage--advanced-settings__mortgage--pipelines__item--select" :label="basicPipelineTitle" />
            <TextField class="usi-mortgage--advanced-settings__mortgage--pipelines__item--textfiled" :label="idBookingStageTitle" />
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
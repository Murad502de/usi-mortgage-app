<template>
  <Card class="usi-mortgage--advanced-settings__mortgage">
    <div
      v-if="!stub"
      class="usi-mortgage--advanced-settings__mortgage--close"
      @click="deleteMortgage"
    >
      <Icon name="close" color="#CCC8C8" />
    </div>

    <div class="usi-mortgage--advanced-settings__mortgage--title">
      {{ cardTitel }}
    </div>

    <div class="usi-mortgage--advanced-settings__mortgage--main">
      <div class="usi-mortgage--advanced-settings__mortgage--mortgage-pipeline">
        <div
          class="
            usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__pipeline
          "
        >
          <div
            class="
              usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__pipeline--row
            "
          >
            <Select
              class="
                usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__pipeline--select
              "
              :stub="stub"
              :label="mortgagePipelineTitle"
              :items="pipelines"
              v-model="mortgagePipeline"
            />
            <TextField
              :stub="stub"
              class="
                usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__pipeline--textfield
              "
              :label="idCreationLeadStageTitle"
              v-model="mortgage.amo_mortgage_creation_stage_id"
            />
          </div>

          <div
            class="
              usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__pipeline--row
            "
          >
            <Select
              :stub="stub"
              class="
                usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__pipeline--select
              "
              :multiple="true"
              :label="mortgageBrokersTitle"
              :items="brokers"
              v-model="mortgageBrokers"
            />
          </div>
        </div>

        <div
          class="
            usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages
          "
        >
          <div
            class="
              usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--title
            "
          >
            {{ mortgageStagesTitle }}
          </div>

          <div
            class="
              usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--rows
            "
          >
            <div
              class="
                usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row
              "
            >
              <TextField
                :stub="stub"
                class="
                  usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row-item
                "
                :label="idApplyingStageTitle"
                v-model="mortgage.amo_mortgage_applying_stage_id"
              />
              <TextField
                class="
                  usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row-item
                "
                width="285"
                :stub="stub"
                :label="idsBeforeApplyingStageTitle"
                :value="mortgage.amo_mortgage_before_applying_stage_ids?.join(',')"
                @inputValue="inputBeforeApplyingStages"
              />
              <TextField
                width="310"
                class="
                  usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row-item
                "
                :stub="stub"
                :label="idsAfterApplyingStageTitle"
                :value="mortgage.amo_mortgage_after_applying_stage_ids?.join(',')"
                @inputValue="inputAfterApplyingStages"
              />
            </div>

            <div
              class="
                usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row
              "
            >
              <TextField
                :stub="stub"
                class="
                  usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row-item
                "
                :label="idMortgageApprovedStageTitle"
                v-model="mortgage.amo_mortgage_approved_stage_id"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="usi-mortgage--advanced-settings__mortgage--pipelines">
        <Button
          :disabled="stub"
          class="usi-mortgage--advanced-settings__mortgage--pipelines__add"
        >
          {{ addNewPipelineTitle }}
        </Button>

        <div
          class="usi-mortgage--advanced-settings__mortgage--pipelines__items"
        >
          <Pipeline
            :stub="stub"
            :pipelines="pipelines"
            :pipelineTitle="basicPipelineTitle"
            :stageTitle="idBookingStageTitle"
            v-model:pipeline-value="pipelineValue"
            v-model:stage-value="stageValue"
          />
        </div>
      </div>
    </div>
  </Card>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
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
              v-model="amoMortgageCreationStageId"
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
                v-model="amoMortgageApplyingStageId"
              />
              <TextField
                class="
                  usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row-item
                "
                width="285"
                :stub="stub"
                :label="idsBeforeApplyingStageTitle"
                :value="beforeApplyingStagesValue"
                @inputValue="inputBeforeApplyingStages"
              />
              <TextField
                width="310"
                class="
                  usi-mortgage--advanced-settings__mortgage--mortgage-pipeline__stages--row-item
                "
                :stub="stub"
                :label="idsAfterApplyingStageTitle"
                :value="afterApplyingStages"
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
                v-model="amoMortgageApprovedStageId"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="usi-mortgage--advanced-settings__mortgage--pipelines">
        <Button
          class="usi-mortgage--advanced-settings__mortgage--pipelines__add"
          :disabled="stub"
          @click="addPipeline"
        >
          {{ addNewPipelineTitle }}
        </Button>

        <div
          class="usi-mortgage--advanced-settings__mortgage--pipelines__items"
        >
          <Pipeline
            v-for="pipeline in readPipelines"
            class="usi-mortgage--advanced-settings__mortgage--pipelines__item"
            :key="pipeline.uuid"
            :stub="stub"
            :pipelines="pipelines"
            :pipelineTitle="basicPipelineTitle"
            :stageTitle="idBookingStageTitle"
            :pipeline-value="getPipelineById(pipeline.amo_pipeline_id)"
            :stage-value="pipeline.amo_pipeline_booking_stage_id"
            @updatePipeline="updatePipeline"
            @deletePipeline="deletePipeline"
          />
        </div>
      </div>
    </div>
  </Card>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
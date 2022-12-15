<template>
  <div class="advanced-mortgage-pipeline">
    <Select
      class="advanced-mortgage-pipeline__select"
      :stub="stub"
      :label="pipelineTitle"
      :items="pipelines"
      v-model="bufferPipelineValue"
      @selectItem="selectPipeline"
    />
    <TextField
      class="advanced-mortgage-pipeline__textfield"
      :stub="stub"
      :label="stageTitle"
      v-model="bufferStageValue"
      @inputValue="inputStage"
    />

    <div class="advanced-mortgage-pipeline__delete" @click="deletePipeline">
      <Icon name="delete" color="#DA6A6A" />
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
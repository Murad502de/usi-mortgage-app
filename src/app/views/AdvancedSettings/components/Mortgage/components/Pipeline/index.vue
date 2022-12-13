<template>
  <div class="advanced-mortgage-pipeline">
    <Select
      class="advanced-mortgage-pipeline__select"
      :stub="stub"
      :label="pipelineTitle"
      :items="pipelines"
      v-model="bufferPipelineValue"
    />
    <TextField
      class="advanced-mortgage-pipeline__textfield"
      :stub="stub"
      :label="stageTitle"
      v-model="bufferStageValue"
    />
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
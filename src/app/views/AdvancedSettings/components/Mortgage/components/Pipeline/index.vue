<template>
  <div class="advanced-mortgage-pipeline">
    <Select
      class="advanced-mortgage-pipeline__select"
      :stub="stub"
      :label="pipelineTitle"
      :items="pipelines"
      v-model="pipelineValue"
    />
    <TextField
      class="advanced-mortgage-pipeline__textfield"
      :stub="stub"
      :label="stageTitle"
      v-model="bufferValue"
    />
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
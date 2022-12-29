<template>
  <div class="um-textarea" :style="{ width: `${width}px` }">
    <div v-if="label" class="um-textarea__label">
      {{ label }}
    </div>

    <textarea
      v-if="!stub"
      class="um-textarea__input"
      v-model="bufferValue"
      @focus="$emit('focus');focused = true;"
      @blur="$emit('blur');focused = false;"
      ref="ipt"
      :type="getType"
      @input="input"
      :disabled="disabled"
    />

    <Skeleton v-else height="36" />
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
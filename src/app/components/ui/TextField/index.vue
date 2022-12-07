<template>
  <div class="um-textfield" :style="{width: `${width}px`}">
    <div v-if="label" class="um-textfield__label">
      {{label}}
    </div>
    <input
      class="um-textfield__input"
      v-model="bufferValue"
      @focus="$emit('focus');focused = true;"
      @blur="$emit('blur');focused = false;"
      ref="ipt"
      :type="getType"
      @input="inputHandler"
      :disabled="disabled"
    />
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
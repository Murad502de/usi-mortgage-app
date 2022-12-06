<template>
  <div class="um-select" v-click-outside="vcoSettings">
    <div class="um-select__list">
      <div
        class="um-select__list-item"
        v-for="(item, index) in items"
        :key="index"
        @click="selectItem(index)"
      >
        {{ item.name || item.value || item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
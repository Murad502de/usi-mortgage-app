<template>
  <div
    class="um-select"
    :style="{ width: `${width}px` }"
  >
    <div v-if="label" class="um-select__label">
      {{ label }}
    </div>

    <div class="um-select__select" v-click-outside="vcoSettings">
      <div class="um-select__select_selected">
        <span>{{ modelValue }}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.98351 4.5H9.01398C9.43117 4.5 9.63976 5.00391 9.34445 5.29922L6.33039 8.31562C6.14757 8.49844 5.84992 8.49844 5.66711 8.31562L2.65304 5.29922C2.35773 5.00391 2.56632 4.5 2.98351 4.5Z"
            fill="#9FA2B4"
          />
        </svg>
      </div>

      <div class="um-select__select--list">
        <div
          class="um-select__select--list-item"
          v-for="(item, index) in items"
          :key="index"
          @click="selectItem(index)"
        >
          {{ item.name || item.value || item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
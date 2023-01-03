<template>
  <div class="um-select" :style="{ width: `${width}px` }">
    <div v-if="label" class="um-select__label">
      {{ label }}
    </div>

    <div v-if="!stub" class="um-select__select" v-click-outside="vcoSettings">
      <div
        v-show="!showList"
        class="um-select__select_selected"
        @click="toggle"
      >
        <span>{{ getSelected() }}</span>

        <Icon class="um-select__select--chevron" name="chevrondown" />
      </div>

      <div v-show="showList" class="um-select__select--list">
        <div
          v-for="(item, index) in bufferItems"
          :key="index"
          :class="[
            { 'um-select__select--list-item': true },
            { 'um-select__select--list-item_selected': item.selected },
            { 'um-select__select--list-item_blocked': item.blocked },
          ]"
          @click="selectItem(index)"
        >
          {{ item.name || item.value || item }}
        </div>
      </div>
    </div>

    <Skeleton v-else height="36" />
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
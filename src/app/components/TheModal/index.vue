<template>
  <teleport :to="teleportTo">
    <div v-if="visibility" class="um-modal">
      <div class="um-modal__overlay" @click="close"></div>
      <div class="um-modal__window">
        <ModalCard class="um-modal__window-card">
          <div class="um-modal__window-card--content">
            <div class="um-modal__window-card--content__header">
              <svg class="um-modal__window-card--content__header--close" viewBox="0 0 24 24" @click="close">
                <path
                  fill="#CCC8C8"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
            </div>
            <div class="um-modal__window-card--content__main">
              <slot name="default" />
            </div>
          </div>
        </ModalCard>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
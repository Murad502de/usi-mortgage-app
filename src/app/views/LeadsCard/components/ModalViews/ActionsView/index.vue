<template>
  <div class="usi-mortgage--leadscard--actions-view">
    <div class="usi-mortgage--leadscard--actions-view__title">
      Клиент выбрал квартиру, которую необходимо просчитать?
    </div>

    <div class="usi-mortgage--leadscard--actions-view__body">
      <Button class="usi-mortgage--leadscard--actions-view__btn" @click="yes">
        Да
      </Button>

      <Button
        class="usi-mortgage--leadscard--actions-view__btn"
        @click="consultation"
      >
        Нет, но необходима консультация
      </Button>

      <Button
        class="usi-mortgage--leadscard--actions-view__btn"
        @click="cancel"
      >
        Нет
      </Button>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
<template>
  <div class="usi-mortgage--leadscard--settings-view">
    <div class="usi-mortgage--leadscard--settings-view__title">
      Выберите брокера и заполните поле "Примечание для брокера"
    </div>

    <div class="usi-mortgage--leadscard--settings-view__body">
      <div class="usi-mortgage--leadscard--settings-view__brokers">
        <Button
          v-for="broker in brokers"
          :key="broker.id"
          class="usi-mortgage--leadscard--settings-view__broker"
          @click="selectBroker({ broker })"
        >
          {{ broker.title }}
        </Button>
      </div>

      <div class="usi-mortgage--leadscard--settings-view__message">
        <textarea
          style="
            box-sizing: border-box;
            border: 1px solid rgb(211, 214, 215);
            height: 103px;
            padding: 10px;
            width: 320px;
            resize: none;
            height: 120px;
          "
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
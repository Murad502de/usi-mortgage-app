<template>
  <div class="usi-mortgage--advanced-settings">
    <Header
      @save="save"
      @cancel="cancel"
      @add="addMortgage"
      :addDisabled="addDisabled"
      :cancelDisabled="cancelDisabled"
      :saveDisabled="saveDisabled"
    />
    <Main :mortgages="readMortgages" :stub="stub" @delete="deleteMortgage" />
    <Modal
      teleportTo="#page_holder"
      :visibility="modalVisibility"
      @close="closeModal"
      class="usi-mortgage--advanced-settings__modal"
    >
      <div class="usi-mortgage--advanced-settings__modal--message">
        Вы не сохранили внесенные изменения!
      </div>
      <div class="usi-mortgage--advanced-settings__modal--actions">
        <ModalActions
          cancelBtnTitle="Вернуться к настройкам"
          saveBtnTitle="Отменить"
          :cancelVisibility="true"
          :cancelDisabled="false"
          :saveDisabled="false"
          @save="saveModal"
          @cancel="closeModal"
        />
      </div>
    </Modal>
  </div>
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />
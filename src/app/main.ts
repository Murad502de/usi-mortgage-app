import { createApp } from 'vue'

import TestView from './views/TestView/index.vue';

const Widget = {
  render() {
    console.debug('Widget[Mortgage]::render'); //DELETE
  },
  init() {
    console.debug('Widget[Mortgage]::init'); //DELETE
  },
  bindActions() {
    console.debug('Widget[Mortgage]::bindActions'); //DELETE
  },
  settings() {
    console.debug('Widget[Mortgage]::settings'); //DELETE

    createApp(TestView).mount('.widget-settings__desc-space');
  },
  advancedSettings() {
    console.debug('Widget[Mortgage]::advancedSettings'); //DELETE

    // #work-area-xlyq4ruhpi3wci1edvbwa1yud2jm0wsuntuonbe0

    createApp(TestView).mount('#work-area-xlyq4ruhpi3wci1edvbwa1yud2jm0wsuntuonbe0');
  },
  onSave() {
    console.debug('Widget[Mortgage]::onSave'); //DELETE
  },
  destroy() {
    console.debug('Widget[Mortgage]::destroy'); //DELETE
  },
  contacts: {
    selected() {
      console.debug('Widget[Mortgage]::contacts_selected'); //DELETE
    }
  },
  leads: {
    selected() {
      console.debug('Widget[Mortgage]::leads_selected'); //DELETE
    }
  },
  tasks: {
    selected() {
      console.debug('Widget[Mortgage]::tasks_selected'); //DELETE
    }
  },
};

export default Widget;

import { createApp } from 'vue';
import Settings from "@/components/settings";
import store from '@/store';

const Widget = {
  render() {
    console.debug('VueWidget << render'); //DELETE

    return true;
  },
  init() {
    console.debug('VueWidget << init'); //DELETE

    return true;
  },
  bind_actions() {
    console.debug('VueWidget << bind_actions'); //DELETE

    return true;
  },
  settings() {
    console.debug('VueWidget << settings v3'); //DELETE

    createApp(Settings)
      .use(store)
      .mount('.widget-settings__desc-space');
  },
  onSave() {
    console.debug('VueWidget << onSave'); //DELETE
  },
  destroy() {
    console.debug('VueWidget << destroy'); //DELETE
  },
  contacts_selected() {
    console.debug('VueWidget << contacts_selected'); //DELETE
  },
  leads_selected() {
    console.debug('VueWidget << leads_selected'); //DELETE
  },
  tasks_selected() {
    console.debug('VueWidget << tasks_selected'); //DELETE
  }
};



export default Widget;

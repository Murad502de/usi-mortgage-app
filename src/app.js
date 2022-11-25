import { createApp } from 'vue';
import store from '@/store';
import * as pageCodes from '@/shared/pageCodes';
class App {
  create({ area }) {
    console.debug('AppClass << create'); //DELETE
  }
  createIn({ view, mountPoint }) {
    console.debug('AppClass << createIn'); //DELETE

    createApp(view)
      .use(store)
      .mount(mountPoint);
  }
  getViewByArea({ area }) {
    console.debug('AppClass << getViewByArea'); //DELETE

    switch (area) {
      case pageCodes.LEADS_CARD:
        return;

      default:
        return null;
    }
  }
}

export default new App();
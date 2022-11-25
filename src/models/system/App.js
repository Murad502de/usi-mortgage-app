import { createApp } from 'vue';
import store from '@/store';
import MountPoint from '@/models/system/MountPoint';
import View from '@/models/system/View';

class App {
  async create({ area }) {
    console.debug('AppClass << create'); //

    const MOUNT_POINT = MountPoint.getByArea({ area, });

    await MountPoint.createAfter({
      point: MOUNT_POINT,
      after: 'div[data-id="685555"]',
    });

    this.createIn({
      view: View.getByArea({ area, }),
      mountPoint: MOUNT_POINT,
    });
  }
  createIn({ view, mountPoint }) {
    console.debug('AppClass << createIn'); //DELETE

    createApp(view)
      .use(store)
      .mount(`.${mountPoint}`);
  }
}

export default new App();
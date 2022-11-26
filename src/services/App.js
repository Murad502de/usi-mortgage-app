import { createApp } from 'vue';
import store from '@/store';
import * as pageCodes from '@/shared/pageCodes';
import MountPoint from '@/services/MountPoint';
import View from '@/services/View';

class App {
  async create({ area }) {
    console.debug('AppClass << create'); //DELETE

    const MOUNT_POINT = MountPoint.getByArea({ area });

    console.debug('AppClass << create : MOUNT_POINT', MOUNT_POINT); //DELETE

    if (!MOUNT_POINT) return;

    await MountPoint.createAfter({
      point: MOUNT_POINT,
      after: this.getRelativeRenderSelector({ area }),
    });

    this.createIn({
      view: View.getByArea({ area, }),
      mountPoint: MOUNT_POINT,
    });
  }
  createIn({ view, mountPoint }) {
    createApp(view)
      .use(store)
      .mount(`.${mountPoint}`);
  }
  getRelativeRenderSelector({ area }) {
    switch (area) {
      case pageCodes.LEADS_CARD:
        return 'div[data-id="685555"]';

      default:
        return null;
    }
  }
}

export default new App();
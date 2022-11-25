import { createApp } from 'vue';
import store from '@/store';
import * as pageCodes from '@/shared/pageCodes';
import MountPoint from '@/models/system/MountPoint';
import View from '@/models/system/View';

class App {
  async create({ area }) {
    console.debug('AppClass << create'); //DELETE

    const MOUNT_POINT = MountPoint.getByArea({ area });

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
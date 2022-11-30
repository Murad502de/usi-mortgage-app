import { createApp } from 'vue';
import VueAxios from 'vue-axios';
import apiGatewayDefault from '@/network/gateways/default';
import store from '@/store';
import * as pageCodes from '@/shared/pageCodes';
import MountPoint from '@/services/MountPoint';
import View from '@/services/View';

class App {
  async create({ area, widget, view, }) {
    console.debug('AppService::create[widget]', widget); //DELETE

    const WIDGET_CODE = widget.params.widget_code;
    const MOUNT_POINT = process.env.VUE_APP_MOUNT_POINT || null;
    let VIEW = view;

    if (!VIEW) {
      VIEW = View.getByArea({
        area,
        widgetCode: WIDGET_CODE,
      });
    }

    console.debug('AppService::create[VIEW]', VIEW); //DELETE

    if (!VIEW || !MOUNT_POINT) return;

    await MountPoint.create({ point: MOUNT_POINT });

    this.createIn({
      view: VIEW,
      point: `#${MOUNT_POINT}`,
      widget,
    });
  }
  async createIn({ view, point, widget, }) {
    console.debug('AppService::createIn', { view, point, widget, }); //DELETE

    const app = createApp(view)
      .use(VueAxios, { $apiGatewayDefault: apiGatewayDefault, })
      .use(store)
      .mount(point);

    console.debug('AppService::createIn[app]', app); //DELETE

    await app.$store.dispatch('widget/setParams', {
      params: widget.params
    });
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
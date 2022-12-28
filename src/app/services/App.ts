import { createApp } from 'vue';
// import VueAxios from 'vue-axios';
// import apiGatewayDefault from '@/app/network/gateways/default';
import vClickOutside from "click-outside-vue3";
import store from '@/app/store';
import * as pageCodes from '@/app/shared/pageCodes';
import MountPoint from '@/app/services/MountPoint';
import View from '@/app/services/View';

class App {
  async create({ area, widget, view, }) {
    console.debug('app/services/App/create/area', area); //DELETE
    console.debug('app/services/App/create/widget', widget); //DELETE
    console.debug('app/services/App/create/view', view); //DELETE

    const WIDGET_CODE = widget.params.widget_code;
    const MOUNT_POINT = process.env.VUE_APP_MOUNT_POINT || null;
    let VIEW = view;

    if (!VIEW) {
      VIEW = View.getByArea({
        area,
        widgetCode: WIDGET_CODE,
      });
    }

    console.debug('app/services/App/create/VIEW', VIEW); //DELETE

    if (!VIEW || !MOUNT_POINT) return;

    await MountPoint.create({ point: MOUNT_POINT });

    this.createIn({
      view: VIEW,
      point: `#${MOUNT_POINT}`,
      widget,
    });
  }
  async createIn({ view, point, widget, }) {
    console.debug('app/services/App/createIn/view', view); //DELETE
    console.debug('app/services/App/createIn/point', point); //DELETE
    console.debug('app/services/App/createIn/widget', widget); //DELETE

    const app = createApp(view)
      // .use(VueAxios, { $apiGatewayDefault: apiGatewayDefault, })
      .use(store)
      .use(vClickOutside)
      .mount(point);

    console.debug('app/services/App/createIn/app', app); //DELETE

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
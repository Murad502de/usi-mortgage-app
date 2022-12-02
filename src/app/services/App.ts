import { createApp } from 'vue';
// import VueAxios from 'vue-axios';
// import apiGatewayDefault from '@/app/network/gateways/default';
import store from '@/app/store';
import * as pageCodes from '@/app/shared/pageCodes';
import MountPoint from '@/app/services/MountPoint';
import View from '@/app/services/View';

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

    console.debug('AppService::createIn[widget]', widget.authorizedRequest); //DELETE

    // widget.crm_post(
    //   'https://webhook.site/aa372c9b-68ea-4731-9ec0-8c17d9616158',
    //   {
    //     // Передаем POST данные
    //     name: 'TEST NAME',
    //   },
    //   function (msg: any) {
    //     console.debug('AppService::crm_post', msg)
    //   },
    //   'json'
    // );


    const app = createApp(view)
      // .use(VueAxios, { $apiGatewayDefault: apiGatewayDefault, })
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
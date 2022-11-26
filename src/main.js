import WidgetSettings from "@/views/WidgetSettings";
import * as mountPoints from '@/shared/mountPoints';
import App from '@/services/App';

const Widget = {
  render() {
    return true;
  },
  init() {
    console.debug('VUE_APP_API_GATEWAY_DEFAULT_URL', process.env.VUE_APP_API_GATEWAY_DEFAULT_URL); //DELETE

    App.create({
      area: AMOCRM.getWidgetsArea(),
    });

    return true;
  },
  bind_actions() {
    return true;
  },
  settings() {
    App.createIn({
      view: WidgetSettings,
      mountPoint: mountPoints.WIDGET_SETTINGS,
    });
  },
  onSave() { },
  destroy() { },
  contacts_selected() { },
  leads_selected() { },
  tasks_selected() { }
};

export default Widget;

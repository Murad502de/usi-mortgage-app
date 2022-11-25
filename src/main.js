import WidgetSettings from "@/views/WidgetSettings";
import * as mountPoints from '@/shared/mountPoints';
import App from '@/App';

const Widget = {
  render() {
    return true;
  },
  init() {
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

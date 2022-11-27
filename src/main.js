import WidgetSettings from "@/views/WidgetSettings";
import * as mountPoints from '@/shared/mountPoints';
import App from '@/services/App';

const Widget = {
  render(self) {
    return true;
  },
  init(self) {
    console.debug('INIT', self.get_settings().widget_code); //DELETE

    App.create({
      area: AMOCRM.getWidgetsArea(),
    });

    return true;
  },
  bind_actions(self) {
    return true;
  },
  settings(self) {
    App.createIn({
      view: WidgetSettings,
      mountPoint: mountPoints.WIDGET_SETTINGS,
    });
  },
  onSave(self) { },
  destroy(self) { },
  contacts_selected(self) { },
  leads_selected(self) { },
  tasks_selected(self) { }
};

export default Widget;

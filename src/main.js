import WidgetSettings from "@/views/WidgetSettings";
import * as mountPoints from '@/shared/mountPoints';
import App from '@/services/App';

const Widget = {
  render(self) {
    return true;
  },
  init(self) {
    App.create({
      area: AMOCRM.getWidgetsArea(),
      widget: self,
    });

    return true;
  },
  bind_actions(self) {
    return true;
  },
  settings(self) {
    App.createIn({
      view: WidgetSettings,
      point: `.${mountPoints.WIDGET_SETTINGS}`,
      widget: self,
    });
  },
  onSave(self) { },
  destroy(self) { },
  contacts_selected(self) { },
  leads_selected(self) { },
  tasks_selected(self) { }
};

export default Widget;

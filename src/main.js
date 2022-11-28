import WidgetSettings from "@/views/WidgetSettings";
import AdvancedSettings from "@/views/AdvancedSettings";
import * as mountPoints from '@/shared/mountPoints';
import App from '@/services/App';

const Widget = {
  render(self) { },
  init(self) {
    App.create({
      area: AMOCRM.getWidgetsArea(),
      widget: self,
    });
  },
  bind_actions(self) { },
  settings(self) {
    App.createIn({
      view: WidgetSettings,
      point: `.${mountPoints.WIDGET_SETTINGS}`,
      widget: self,
    });
  },
  advancedSettings(self) {
    App.create({
      area: AMOCRM.getWidgetsArea(),
      view: AdvancedSettings,
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

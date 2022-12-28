import App from '@/app/services/App';
import { mountPoints } from '@/app/shared/mountPoints';
import WidgetSettings from "./views/WidgetSettings/index.vue";
import AdvancedSettings from "./views/AdvancedSettings/index.vue";

const Widget = {
  render() {
    console.debug('Widget[Mortgage]::render'); //DELETE
  },
  init(self: any) {
    console.debug('app/main/Widget/init'); //DELETE

    App.create({
      area: window.AMOCRM.getWidgetsArea(),
      widget: self,
      view: null,
    });
  },
  bindActions() {
    console.debug('Widget[Mortgage]::bindActions'); //DELETE
  },
  settings(self: any) {
    console.debug('Widget[Mortgage]::settings'); //DELETE

    App.createIn({
      view: WidgetSettings,
      point: `.${mountPoints.WIDGET_SETTINGS}`,
      widget: self,
    });
  },
  advancedSettings(self: any) {
    console.debug('Widget[Mortgage]::advancedSettings', self); //DELETE

    App.create({
      area: window.AMOCRM.getWidgetsArea(),
      view: AdvancedSettings,
      widget: self,
    });
  },
  onSave() {
    console.debug('Widget[Mortgage]::onSave'); //DELETE
  },
  destroy() {
    console.debug('Widget[Mortgage]::destroy'); //DELETE
  },
  contacts: {
    selected() {
      console.debug('Widget[Mortgage]::contacts_selected'); //DELETE
    }
  },
  leads: {
    selected() {
      console.debug('Widget[Mortgage]::leads_selected'); //DELETE
    }
  },
  tasks: {
    selected() {
      console.debug('Widget[Mortgage]::tasks_selected'); //DELETE
    }
  },
};

export default Widget;

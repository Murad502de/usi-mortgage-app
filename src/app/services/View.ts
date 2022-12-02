import * as pageCodes from '@/app/shared/pageCodes';
import LeadsCard from "../views/LeadsCard/index.vue";
// import AdvancedSettings from "../views/AdvancedSettings/index.vue";

class View {
  getByArea({ area, widgetCode, }) {
    // console.debug('View::getByArea[area]', area); //DELETE
    // console.debug('View::getByArea[widgetCode]', `${pageCodes.ADVANCED_SETTINGS}${widgetCode}`); //DELETE

    switch (area) {
      case pageCodes.LEADS_CARD:
        return LeadsCard;

      // case `${pageCodes.ADVANCED_SETTINGS}${widgetCode}`:
      //   return AdvancedSettings;

      default:
        return null;
    }
  }
}

export default new View();
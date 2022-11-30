import * as pageCodes from '@/shared/pageCodes';
import LeadsCard from "@/views/LeadsCard";
import AdvancedSettings from "@/views/AdvancedSettings";

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
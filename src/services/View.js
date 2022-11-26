import * as pageCodes from '@/shared/pageCodes';
import LeadsCard from "@/views/LeadsCard";

class View {
  getByArea({ area }) {
    switch (area) {
      case pageCodes.LEADS_CARD:
        return LeadsCard;

      default:
        return null;
    }
  }
}

export default new View();
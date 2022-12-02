import * as pageCodes from '@/app/shared/pageCodes';
import * as mountPoints from '@/app/shared/mountPoints';

class MountPoint {
  async create({ point, }) {
    // console.debug('MountPoint::create', { point }); //DELETE

    if (!this.exists({ point })) {
      let mountPoint = document.createElement('div');

      mountPoint.id = point;

      document.body.appendChild(mountPoint);
    }
  }
  async createAfter({ point, after }) {
    // console.debug('MountPoint::createAfter', { point, after }); //DELETE

    if (!this.exists({ point })) {
      let mountPoint = document.createElement('div');

      mountPoint.id = point;

      document.querySelector(after).after(mountPoint)
    }
  }
  exists({ point }) {
    return !!document.getElementById(point);
  }
  getByArea({ area, widgetCode, }) {
    // console.debug('MountPoint::getByArea[area]', area); //DELETE
    // console.debug('MountPoint::getByArea[widgetCode]', `${pageCodes.ADVANCED_SETTINGS}${widgetCode}`); //DELETE

    switch (area) {
      case pageCodes.LEADS_CARD:
        return 'usi-mortgage-app--button';

      case `${pageCodes.ADVANCED_SETTINGS}${widgetCode}`:
        return `div[id="work-area-${widgetCode}"]`;

      default:
        return null;
    }
  }
}

export default new MountPoint();
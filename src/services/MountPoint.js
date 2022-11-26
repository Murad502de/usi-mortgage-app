import * as pageCodes from '@/shared/pageCodes';
import * as mountPoints from '@/shared/mountPoints';

class MountPoint {
  getByArea({ area }) {
    switch (area) {
      case pageCodes.LEADS_CARD:
        return 'usi-mortgage-app--button';

      default:
        return null;
    }
  }
  async createAfter({ point, after }) {
    if (!this.exists({ point })) {
      let mountPoint = document.createElement('div');

      mountPoint.className = point;

      document.querySelector(after).after(mountPoint)
    }
  }
  exists({ point }) {
    return !!document.querySelector(`.${point}`);
  }
}

export default new MountPoint();
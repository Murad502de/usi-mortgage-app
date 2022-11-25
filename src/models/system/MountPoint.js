import * as pageCodes from '@/shared/pageCodes';
import * as mountPoints from '@/shared/mountPoints';

class MountPoint {
  getByArea({ area }) {
    console.debug('MountPointClass << getByArea'); //DELETE

    switch (area) {
      case pageCodes.LEADS_CARD:
        return '.linked-form__field_budget';

      default:
        return null;
    }
  }
  async createAfter({ point, after }) {
    if (!this.exists({ point })) {
      let mountPoint = document.createElement('div');

      mountPoint.className = point;

      document.querySelector(`.${after}`).after(div)
    }
  }
  exists({ point }) {
    return !!document.querySelector(`.${point}`);
  }
}

export default new MountPoint();
import { createStore } from 'vuex';

import widget from './modules/widget';

export default createStore(
  {
    modules: {
      widget,
    }
  }
)

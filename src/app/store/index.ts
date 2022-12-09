import { createStore } from 'vuex';

import widget from './modules/widget';
import dictionaries from './modules/dictionaries';

export default createStore(
  {
    modules: {
      widget,
      dictionaries,
    }
  }
)

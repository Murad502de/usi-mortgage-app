import { createStore } from 'vuex';

import widget from './modules/widget';
import dictionaries from './modules/dictionaries';
import mortgage from './modules/mortgage';

export default createStore(
  {
    modules: {
      widget,
      dictionaries,
      mortgage,
    }
  }
)

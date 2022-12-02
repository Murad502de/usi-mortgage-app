import axios from 'axios';

// const axios = require('axios');

import { failInterceptor } from '@/app/network/interceptors/failInterceptor';
import { tokenInterceptor } from '@/app/network/interceptors/tokenInterceptor';
import { dataLengthInterceptor } from '@/app/network/interceptors/dataLengthInterceptor';

axios.defaults.baseURL = process.env.VUE_APP_API_GATEWAY_DEFAULT_URL;
axios.defaults.headers['Content-Type'] = "application/json";

axios.interceptors.request.use(
  tokenInterceptor({ tokenName: '', }),
  failInterceptor
);
axios.interceptors.request.use(
  dataLengthInterceptor,
  failInterceptor
);

export default axios;
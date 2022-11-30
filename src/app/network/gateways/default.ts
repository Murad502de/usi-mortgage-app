import axios from 'axios';
import { failInterceptor } from '@/network/interceptors/failInterceptor';
import { tokenInterceptor } from '@/network/interceptors/tokenInterceptor';
import { dataLengthInterceptor } from '@/network/interceptors/dataLengthInterceptor';

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
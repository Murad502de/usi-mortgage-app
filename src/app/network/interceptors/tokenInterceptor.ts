import Cookies from 'js-cookie';
// const Cookies = require('js-cookie');

export const tokenInterceptor = ({ tokenName, }) => {
  return (config) => {
    const token = Cookies.get(tokenName);

    console.debug('setToken[API]', token); // DELETE

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  };
};
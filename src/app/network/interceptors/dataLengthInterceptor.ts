export const dataLengthInterceptor = (config) => {
  config.maxContentLength = 500000000;
  config.maxBodyLength = 5000000000;

  return config;
};
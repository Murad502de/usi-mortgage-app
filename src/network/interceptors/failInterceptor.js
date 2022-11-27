export const failInterceptor = (error) => {
  return Promise.reject(error);
}
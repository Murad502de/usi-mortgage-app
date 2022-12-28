export const fetchMortgages = async (): Promise<Array<any>> => {
  console.debug('fetchMortgages', process.env.VUE_APP_API_GATEWAY_DEFAULT_URL); //DELETE

  let mortgages: Array<any> = [];

  await $.get(`${process.env.VUE_APP_API_GATEWAY_DEFAULT_URL}/mortgages`)
    .done(function (data) {
      console.debug('fetchMortgages::done', data); //DELETE

      mortgages = data.data;
    });

  console.debug('fetchMortgages::AFTER-done'); //DELETE

  return mortgages;
};
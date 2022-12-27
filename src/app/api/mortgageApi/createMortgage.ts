export const createMortgage = async (mortgage) => {
  console.debug('api/mortgageApi/createMortgage/mortgage', mortgage); //DELETE

  try {
    let response = {};
    const uploadData = {
      ...mortgage,
      amo_user_ids: [...mortgage.brokers.map(broker => Number(broker))],
    };

    console.debug('api/mortgageApi/createMortgage/uploadData', uploadData); //DELETE

    await $.post(`${process.env.VUE_APP_API_GATEWAY_DEFAULT_URL}/mortgages`, uploadData)
      .done(function (data) {
        console.debug('api/mortgageApi/createMortgage/done', data); //DELETE

        response = data;
      });

    console.debug('api/mortgageApi/createMortgage/response', response); //DELETE

    return response;
  } catch (e) {
    return Object.assign({}, e).response;
  }
};
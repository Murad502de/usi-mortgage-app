export const updateMortgage = async (mortgage) => {
  console.debug('api/mortgageApi/updateMortgage/mortgage', mortgage); //DELETE

  try {
    let response = {};

    await $.ajax({
      type: "PUT",
      url: `${process.env.VUE_APP_API_GATEWAY_DEFAULT_URL}/mortgages/${mortgage.uuid}/update`,
      data: mortgage,
      dataType: 'json'
    }).done(function (data) {
      console.debug('api/mortgageApi/updateMortgage/done', data); //DELETE

      response = data;
    }).fail(function () {
      alert(`Ошибка при обновлении ипотечного узла: ${mortgage.uuid}`);
    });

    console.debug('api/mortgageApi/updateMortgage/response', response); //DELETE

    return response;
  } catch (e) {
    return Object.assign({}, e).response;
  }
};
export const deleteMortgage = async (uuid) => {
  console.debug('api/mortgageApi/deleteMortgage/uuid', uuid); //DELETE

  try {
    let response = {};

    await $.ajax({
      type: "DELETE",
      url: `${process.env.VUE_APP_API_GATEWAY_DEFAULT_URL}/mortgages/${uuid}/delete`,
      dataType: 'json'
    }).done(function (data) {
      console.debug('api/mortgageApi/deleteMortgage/done', data); //DELETE

      response = data;
    }).fail(function () {
      alert(`Ошибка при удалении ипотечного узла: ${uuid}`);
    });

    console.debug('api/mortgageApi/deleteMortgage/response', response); //DELETE

    return response;
  } catch (e) {
    return Object.assign({}, e).response;
  }
};
export const createLead = async (params) => {
  console.debug(
    'app/api/leadApi/createLead/VUE_APP_API_GATEWAY_DEFAULT_URL',
    process.env.VUE_APP_API_GATEWAY_DEFAULT_URL
  ); //DELETE

  try {
    let response = {};

    await $.ajax({
      type: "POST",
      url: `${process.env.VUE_APP_API_GATEWAY_DEFAULT_URL}/leads`,
      dataType: 'json',
      data: params,
      statusCode: {
        404: function (data) {
          console.debug('app/api/leadApi/createLead/not-found', data); //DELETE

          return response;
        }
      }
    }).done(function (data) {
      console.debug('app/api/leadApi/createLead/done', data); //DELETE

      response = data;
    }).fail(function (data) {
      console.debug('app/api/leadApi/createLead/fail', data); //DELETE
    });

    console.debug('app/api/leadApi/createLead/after-done/response', response); //DELETE

    return response;
  } catch (e) {
    return Object.assign({}, e).response;
  }
};
export const fetchPipelineByAmoId = async (amo_id) => {
  console.debug(
    'app/api/leadApi/fetchPipelineByAmoId/VUE_APP_API_GATEWAY_DEFAULT_URL',
    process.env.VUE_APP_API_GATEWAY_DEFAULT_URL
  ); //DELETE

  try {
    let response = {};

    await $.ajax({
      type: "GET",
      url: `${process.env.VUE_APP_API_GATEWAY_DEFAULT_URL}/pipelines/id/${amo_id}`,
      dataType: 'json',
      statusCode: {
        404: function (data) {
          console.debug('app/api/leadApi/fetchPipelineByAmoId/not-found', data); //DELETE

          return response;
        }
      }
    }).done(function (data) {
      console.debug('app/api/leadApi/fetchPipelineByAmoId/done', data); //DELETE

      response = data.data;
    }).fail(function (data) {
      console.debug('app/api/leadApi/fetchPipelineByAmoId/fail', data); //DELETE
    });

    console.debug('app/api/leadApi/fetchPipelineByAmoId/after-done/response', response); //DELETE

    return response;
  } catch (e) {
    return Object.assign({}, e).response;
  }
};
export const deletePipeline = async (uuid) => {
  console.debug('api/pipelineApi/deletePipeline/uuid', uuid); //DELETE

  try {
    let response = {};

    await $.ajax({
      type: "DELETE",
      url: `${process.env.VUE_APP_API_GATEWAY_DEFAULT_URL}/pipelines/${uuid}/delete`,
      dataType: 'json'
    }).done(function (data) {
      console.debug('api/pipelineApi/deletePipeline/done', data); //DELETE

      response = data;
    }).fail(function () {
      alert(`Ошибка при удалении, привязанной к ипотечному узлу, воронки: ${uuid}`);
    });

    console.debug('api/pipelineApi/deletePipeline/response', response); //DELETE

    return response;
  } catch (e) {
    return Object.assign({}, e).response;
  }
};
export const updatePipeline = async (pipeline) => {
  console.debug('api/pipelineApi/updatePipeline/pipeline', pipeline); //DELETE

  try {
    let response = {};

    await $.ajax({
      type: "PUT",
      url: `${process.env.VUE_APP_API_GATEWAY_DEFAULT_URL}/pipelines/${pipeline.uuid}/update`,
      data: pipeline,
      dataType: 'json'
    }).done(function (data) {
      console.debug('api/pipelineApi/updatePipeline/done', data); //DELETE

      response = data;
    }).fail(function () {
      alert(`Ошибка при обновлении, привязанной к ипотечному узлу, воронки: ${pipeline.uuid}`);
    });

    console.debug('api/pipelineApi/updatePipeline/response', response); //DELETE

    return response;
  } catch (e) {
    return Object.assign({}, e).response;
  }
};
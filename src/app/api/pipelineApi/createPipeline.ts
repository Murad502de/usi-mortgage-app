export const createPipeline = async (pipeline) => {
  console.debug('api/pipelineApi/createPipeline/pipeline', pipeline); //DELETE

  try {
    let response = {};

    await $.post(`${process.env.VUE_APP_API_GATEWAY_DEFAULT_URL}/pipelines`, pipeline)
      .done(function (data) {
        console.debug('api/pipelineApi/createPipeline/done', data); //DELETE

        response = data;
      });

    console.debug('api/pipelineApi/createPipeline/response', response); //DELETE

    return response;
  } catch (e) {
    return Object.assign({}, e).response;
  }
};
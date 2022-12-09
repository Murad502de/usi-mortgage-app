export const fetchLeadPipelinesDictionary = async () => {
  console.debug('fetchLeadPipelinesDictionary', $, process.env.VUE_APP_API_GATEWAY_DEFAULT_URL); //DELETE

  let pipelines: Array<any> = [];

  await $.get(`${process.env.VUE_APP_API_GATEWAY_DEFAULT_URL}/dictionaries/leads/pipelines`,)
    .done(function (data) {
      // console.debug('fetchLeadPipelinesDictionary::done', data); //DELETE

      pipelines = data.data;
    });

  // console.debug('fetchLeadPipelinesDictionary::AFTER-done'); //DELETE

  return pipelines;
};
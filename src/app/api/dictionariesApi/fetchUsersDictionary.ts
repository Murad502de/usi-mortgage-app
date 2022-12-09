export const fetchUsersDictionary = async () => {
  console.debug('fetchUsersDictionary', $, process.env.VUE_APP_API_GATEWAY_DEFAULT_URL); //DELETE

  let users: Array<any> = [];

  await $.get(`${process.env.VUE_APP_API_GATEWAY_DEFAULT_URL}/dictionaries/users`,)
    .done(function (data) {
      // console.debug('fetchUsersDictionary::done', data); //DELETE

      users = data.data;
    });

  // console.debug('fetchUsersDictionary::AFTER-done'); //DELETE

  return users;
};
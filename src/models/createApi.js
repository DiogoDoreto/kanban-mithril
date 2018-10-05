import m from 'mithril';

const makeURL = (...parts) => parts.join('/');

const createApi = resource => {
  const makeRequest = method => data => id =>
    m.request({
      method,
      data,
      url: makeURL('//rem-rest-api.herokuapp.com/api', resource, id),
      withCredentials: true,
    });

  return {
    get: makeRequest('GET')(),
    post: makeRequest('POST'),
    put: makeRequest('PUT'),
    delete: makeRequest('DELETE')(),
  };
};

export default createApi;

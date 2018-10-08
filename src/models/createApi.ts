import { request } from 'mithril';

const makeURL = (...parts: any[]) => parts.join('/');

interface IMakeRequest {
  <T>(method: string): (data?: object) => (id?: number) => Promise<T>;
}

interface IGETResponse<T> {
  data: T[];
  offset: number;
  limit: number;
  total: number;
}

const createApi = <T>(resource: string) => {
  const makeRequest: IMakeRequest = <U>(method: string) => data => id =>
    request<U>({
      method,
      data,
      url: makeURL('//rem-rest-api.herokuapp.com/api', resource, id),
      withCredentials: true,
    });

  return {
    get: makeRequest<IGETResponse<T>>('GET')(),
    post: makeRequest<T>('POST'),
    put: makeRequest<T>('PUT'),
    delete: makeRequest('DELETE')(),
  };
};

export default createApi;

import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../geoData";
import { Serie } from "../../store/geoData/series/types";

interface ResponseObject {
  success: boolean;
  message: string;
  data: Serie[];
}

export async function getSerieApi() {
  const request_config: AxiosRequestConfig = {
    method: "get",
    baseURL,
    url: "/geo-model/data/geo-model-series",
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message, data } = response.data;
  console.log(message);
  return data;
}

export async function putSerieApi(serie: Serie) {
  const putData: Serie = {
    name: serie.name,
    isfault: serie.isfault,
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-series",
    data: putData,
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message } = response.data;
  console.log(message);
}

export async function deleteSerieApi(serie: Serie) {
  const data: Serie = {
    name: serie.name,
    isfault: serie.isfault,
  };
  const request_config: AxiosRequestConfig = {
    method: "delete",
    baseURL,
    url: "/geo-model/data/geo-model-series",
    data,
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message } = response.data;
  console.log(message);
}

/*

  http://127.0.0.1:5000/geo-model/data/geo-modsel-series

Use the axios.request<T>(...args) style definition.
The last Response-interceptor in the array implicitly comply to an interface like (currentResponse: any) => T

So if you have data being something like:

interface ServerResponse {
  data: ServerData
}

interface ServerData {
  foo: string
  bar: number
}

Then you can say:

axios.request<ServerData>({
  url: 'https://example.com/path/to/data',
  transformResponse: (r: ServerResponse) => r.data
}).then((response) => {
  // `response` is of type `AxiosResponse<ServerData>`
  const { data } = response
  // `data` is of type ServerData, correctly inferred
})
*/

import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../geoData";
import { Serie } from "../../store/geoData/series/types";

interface ResponseObject {
  success: boolean;
  message: string;
  data: SeriesData;
}

interface SeriesData {
  name: any;
  isfaul: any;
}

// export function getSeriesApi() {
//   console.log("API CALL");
//   const request_config: AxiosRequestConfig = {
//     baseURL,
//     url: "/geo-model/data/geo-model-series",
//     transformResponse: (response: any) => response.data,
//   };
//   axios.request<ServerSeriesData>(request_config).then((response) => {
//     console.log(response);
//     const { data } = response;
//     return data;
//   });
// }

export function _getSeriesApi() {
  console.log("api call");
  const request_config: AxiosRequestConfig = {
    method: "GET",
    baseURL,
    url: "/geo-model/data/geo-model-series",
  };
  axios.request(request_config).then((res) => {
    console.log(res.data.success);
    console.log(res.data.message);
    console.log(res.data.data);
  });
}

export function getSeriesApi() {
  const request_config: AxiosRequestConfig = {
    method: "GET",
    baseURL,
    url: "/geo-model/data/geo-model-series",
  };
  axios.request<ResponseObject>(request_config).then((res) => {
    console.log(res.data.success);
    console.log(res.data.message);
    console.log(res.data.data.name);
  });
}

/*
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

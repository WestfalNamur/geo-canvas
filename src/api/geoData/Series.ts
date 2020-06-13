import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../geoData";
import { Serie } from "../../store/geoData/series/types";

interface ResponseObject {
  success: boolean;
  message: string;
  data: SeriesServerData;
}

interface SeriesServerData {
  name: {};
  isfaul: {};
}

export async function putSerieApi(serie: Serie) {
  const putData: Serie = {
    name: serie.name,
    isfault: serie.isfault,
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-modsel-series",
    data: putData,
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { data, message } = response.data;
  console.log(message);
  return data;
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
  try {
    const response = await axios.request<ResponseObject>(request_config);
    const { message } = response.data;
    console.log(message);
  } catch (error) {
    if (error.response) {
      console.log("PUT-Series failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
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

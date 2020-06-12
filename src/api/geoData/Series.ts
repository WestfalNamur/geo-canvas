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

export async function putSerieApi(serie: Serie) {
  const data: Serie = {
    name: serie.name,
    isfault: serie.isfault,
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-series",
    data,
  };
  try {
    const response = await axios.request<ResponseObject>(request_config);
    const { data, message } = response.data;
    console.log(message);
    return data;
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

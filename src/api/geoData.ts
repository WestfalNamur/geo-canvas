import { Serie } from "../store/series/types";
import axios, { AxiosRequestConfig } from "axios";

// TODO:
// MaterialTable table data object type  => need for data processing
// remove boilerplates => DRY

const baseURL: string = "http://127.0.0.1:5000";

/*************************** Topoligical data *********************************/
export async function putSerieApi(newSerie: Serie) {
  const data: Serie = {
    name: newSerie.name,
    isfault: newSerie.isfault,
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-series",
    data,
  };
  try {
    const response = await axios(request_config);
    return response;
  } catch (error) {
    if (error.response) {
      console.log("PUT-Series failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
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
    const response = await axios(request_config);
    return response;
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

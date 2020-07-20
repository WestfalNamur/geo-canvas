import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../";
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
  const { data } = response.data;
  return data;
}

export async function putSerieApi(serie: Serie) {
  const data: Serie = {
    name: serie.name,
    isfault: serie.isfault,
    order_series: Number(serie.order_series),
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-series",
    data,
  };
  await axios.request<ResponseObject>(request_config);
}

export async function deleteSerieApi(serie: Serie) {
  const data: Serie = {
    name: serie.name,
    isfault: serie.isfault,
    order_series: serie.order_series,
  };
  const request_config: AxiosRequestConfig = {
    method: "delete",
    baseURL,
    url: "/geo-model/data/geo-model-series",
    data,
  };
  await axios.request<ResponseObject>(request_config);
}

import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../";
import { Surface } from "../../store/geoData/surfaces/types";

interface ResponseObject {
  success: boolean;
  message: string;
  data: Surface[];
}

export async function getSurfaceApi() {
  const request_config: AxiosRequestConfig = {
    method: "get",
    baseURL,
    url: "/geo-model/data/geo-model-surfaces",
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { data } = response.data;
  return data;
}

export async function putSurfaceApi(surface: Surface) {
  const data: Surface = {
    name: surface.name,
    serie: surface.serie,
    order_surface: Number(surface.order_surface),
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-surfaces",
    data,
  };
  await axios.request<ResponseObject>(request_config);
}

export async function deleteSurfaceApi(surface: Surface) {
  const data: Surface = {
    name: surface.name,
    serie: surface.serie,
    order_surface: surface.order_surface,
  };
  const request_config: AxiosRequestConfig = {
    method: "delete",
    baseURL,
    url: "/geo-model/data/geo-model-surfaces",
    data,
  };
  await axios.request<ResponseObject>(request_config);
}

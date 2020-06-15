import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../geoData";
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
  const { message, data } = response.data;
  console.log(message);
  return data;
}

export async function putSurfaceApi(surface: Surface) {
  const data: Surface = {
    name: surface.name,
    serie: surface.serie,
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-surfaces",
    data,
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message } = response.data;
  console.log(message);
}

export async function deleteSurfaceApi(surface: Surface) {
  const data: Surface = {
    name: surface.name,
    serie: surface.serie,
  };
  const request_config: AxiosRequestConfig = {
    method: "delete",
    baseURL,
    url: "/geo-model/data/geo-model-surfaces",
    data,
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message } = response.data;
  console.log(message);
}

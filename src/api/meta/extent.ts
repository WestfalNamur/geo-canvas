import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../";
import { Extent } from "../../store/meta/extent/types";

interface ResponseObject {
  success: boolean;
  message: string;
  data: Extent;
}

export async function getExtentApi() {
  const request_config: AxiosRequestConfig = {
    method: "get",
    baseURL,
    url: "/geo-model/data/geo-model-extent",
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message, data } = response.data;
  console.log(message);
  return data;
}

export async function putExtentApi(extent: Extent) {
  const data: Extent = {
    x_min: extent.x_min,
    x_max: extent.x_max,
    y_min: extent.y_min,
    y_max: extent.y_max,
    z_min: extent.z_min,
    z_max: extent.z_max,
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-extent",
    data,
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message } = response.data;
  console.log(message);
}

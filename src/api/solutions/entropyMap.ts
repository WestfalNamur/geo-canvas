import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../";

export async function getEntropyMap() {
  const request_config: AxiosRequestConfig = {
    method: "get",
    baseURL,
    url: '/geo-model/compute/section/entropy-img',
  };
  const response = await axios.request<any>(request_config);
  const base64str = response.data.data
  return response;
}

import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../";

export async function getEntropyMap() {
  const request_config: AxiosRequestConfig = {
    method: "get",
    baseURL,
    url: '/geo-model/compute/section/entropy-img',
  };
  const response = await axios.request<any>(request_config);
  console.log(response);
  return response;
}

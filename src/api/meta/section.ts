import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../";
import { Section } from "../../store/meta/section/types";

interface ResponseObject {
  success: boolean;
  message: string;
  data: Section;
}

export async function getSectionApi() {
  const request_config: AxiosRequestConfig = {
    method: "get",
    baseURL,
    url: "/geo-model/data/geo-model-section",
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message, data } = response.data;
  console.log(message);
  return data;
}

export async function putSectionApi(section: Section) {
  const data: Section = {
    p1: section.p1,
    p2: section.p2,
    resolution: section.resolution,
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-section",
    data,
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message } = response.data;
  console.log(message);
}

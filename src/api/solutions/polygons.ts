import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../";
import { SectionPolygon } from "../../store/solutions/sectionPolygons/types";

interface ResponseObject {
  success: boolean;
  message: string;
  data: {
    [key: string]: SectionPolygon;
  };
}

export async function getSectionPolygonsApi() {
  const request_config: AxiosRequestConfig = {
    method: "get",
    baseURL,
    url: "/geo-model/pipelines/canvas-section",
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message, data } = response.data;
  console.log(message);
  const sectPolyKeys = Object.keys(data);
  const sectionPolygons: SectionPolygon[] = sectPolyKeys.map((key) => {
    return { name: data[key].name, points: data[key].points };
  });
  return sectionPolygons;
}

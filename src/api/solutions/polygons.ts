import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../";
import { SectionPolygon } from "../../store/solutions/sectionPolygons/types";

interface ResponseObject {
  success: boolean;
  message: string;
  data: {
    [key: string]: number[];
  };
}

export async function getSectionPolygonsApi() {
  const request_config: AxiosRequestConfig = {
    method: "get",
    baseURL,
    url: "/geo-model/realization/single-run-section-poygons",
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message, data } = response.data;
  console.log(message);
  const sectPolyKeys = Object.keys(data);
  const sectionPolygons: SectionPolygon[] = sectPolyKeys.map((key) => {
    return { name: key, points: data[key] };
  });
  return sectionPolygons;
}

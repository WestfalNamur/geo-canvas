import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../";
import { SectionTop } from "../../store/solutions/sectionTops/types";

interface ResponseObject {
  success: boolean;
  message: string;
  data: {
    [key: string]: number[];
  };
}

interface RespObjContours {
  success: boolean;
  message: string;
  data: {
    [key: string]: {
      xvals: number[];
      yvals: number[];
      zvals: number[];
    };
  };
}

export async function getSectionTopsApi() {
  const request_config: AxiosRequestConfig = {
    method: "get",
    baseURL,
    url: "/geo-model/compute/section/contours",
  };
  const response = await axios.request<ResponseObject>(request_config);
  const data = response.data.data;
  const sectTopsKeys = Object.keys(data);
  const sectionTops: SectionTop[] = sectTopsKeys.map((key) => {
    return { blockSurface: key, xyzValues: data[key] };
  });
  return sectionTops;
}

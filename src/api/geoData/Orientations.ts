import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../";
import { Orientation } from "../../store/geoData/orientations/types";

interface ResponseObject {
  success: boolean;
  message: string;
  data: Orientation[];
}

export async function getOrientationsApi() {
  const request_config: AxiosRequestConfig = {
    method: "get",
    baseURL,
    url: "/geo-model/data/geo-model-orientations",
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { data } = response.data;
  return data;
}

export async function putOrientationApi(orientation: Orientation) {
  const data: Orientation = {
    id: orientation.id,
    x: orientation.x,
    y: orientation.y,
    z: orientation.z,
    azimuth: orientation.azimuth,
    dip: orientation.dip,
    polarity: orientation.polarity,
    surface: orientation.surface,
    probdist: orientation.probdist,
    param1: orientation.param1,
    param2: orientation.param2,
    active: orientation.active,
    locstr: orientation.locstr,
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-orientations",
    data,
  };
  await axios.request<ResponseObject>(request_config);
}

export async function deleteOrientationApi(orientation: Orientation) {
  const data: Orientation = {
    id: orientation.id,
    x: orientation.x,
    y: orientation.y,
    z: orientation.z,
    azimuth: orientation.azimuth,
    dip: orientation.dip,
    polarity: orientation.polarity,
    surface: orientation.surface,
    probdist: orientation.probdist,
    param1: orientation.param1,
    param2: orientation.param2,
    active: orientation.active,
    locstr: orientation.locstr,
  };
  const request_config: AxiosRequestConfig = {
    method: "delete",
    baseURL,
    url: "/geo-model/data/geo-model-orientations",
    data,
  };
  await axios.request<ResponseObject>(request_config);
}

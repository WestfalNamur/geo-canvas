import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../";
import { SurfacePoint } from "../../store/geoData/surfacePoints/types";

interface ResponseObject {
  success: boolean;
  message: string;
  data: SurfacePoint[];
}

export async function getSurfacePointApi() {
  const request_config: AxiosRequestConfig = {
    method: "get",
    baseURL,
    url: "/geo-model/data/geo-model-surface-points",
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message, data } = response.data;
  console.log(message);
  return data;
}

export async function putSurfacePointApi(surfacePoint: SurfacePoint) {
  const data: SurfacePoint = {
    id: surfacePoint.id,
    x: surfacePoint.x,
    y: surfacePoint.y,
    z: surfacePoint.z,
    surface: surfacePoint.surface,
    probdist: surfacePoint.probdist,
    param1: surfacePoint.param1,
    param2: surfacePoint.param2,
    active: surfacePoint.active,
    locstr: surfacePoint.locstr,
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-surface-points",
    data,
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message } = response.data;
  console.log(message);
}

export async function deleteSurfacePointApi(surfacePoint: SurfacePoint) {
  const data: SurfacePoint = {
    id: surfacePoint.id,
    x: surfacePoint.x,
    y: surfacePoint.y,
    z: surfacePoint.z,
    surface: surfacePoint.surface,
    probdist: surfacePoint.probdist,
    param1: surfacePoint.param1,
    param2: surfacePoint.param2,
    active: surfacePoint.active,
    locstr: surfacePoint.locstr,
  };
  const request_config: AxiosRequestConfig = {
    method: "delete",
    baseURL,
    url: "/geo-model/data/geo-model-surface-points",
    data,
  };
  const response = await axios.request<ResponseObject>(request_config);
  const { message } = response.data;
  console.log(message);
}

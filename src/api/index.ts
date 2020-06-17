import { Orientation } from "../store/geoData/orientations/types";
import axios, { AxiosRequestConfig } from "axios";

// TODO:
// MaterialTable table data object type  => need for data processing
// remove boilerplates => DRY

export const baseURL: string = "http://127.0.0.1:5000";

/*************************** Topoligical data *********************************/

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
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-surface-orientations",
    data,
  };
  try {
    const response = await axios(request_config);
    return response;
  } catch (error) {
    if (error.response) {
      console.log(
        "Delete-Orientation failed with: ",
        error.response.data.error
      );
    } else {
      console.log("Unknown error: ", error);
    }
  }
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
  };
  const request_config: AxiosRequestConfig = {
    method: "delete",
    baseURL,
    url: "/geo-model/data/geo-model-surface-orientations",
    data,
  };
  try {
    const response = await axios(request_config);
    return response;
  } catch (error) {
    if (error.response) {
      console.log(
        "Delete-Orientation failed with: ",
        error.response.data.error
      );
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

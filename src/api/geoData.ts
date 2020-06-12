import { Serie } from "../store/geoData/series/types";
import { Surface } from "../store/geoData/surfaces/types";
import { SurfacePoint } from "../store/geoData/SurfacePoints/types";
import { Orientation } from "../store/geoData/Orientations/types";
import axios, { AxiosRequestConfig } from "axios";

// TODO:
// MaterialTable table data object type  => need for data processing
// remove boilerplates => DRY

export const baseURL: string = "http://127.0.0.1:5000";

/*************************** Topoligical data *********************************/
export async function _putSerieApi(serie: Serie) {
  const data: Serie = {
    name: serie.name,
    isfault: serie.isfault,
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-series",
    data,
  };
  try {
    const response = await axios(request_config);
    return response;
  } catch (error) {
    if (error.response) {
      console.log("PUT-Series failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

export async function deleteSerieApi(serie: Serie) {
  const data: Serie = {
    name: serie.name,
    isfault: serie.isfault,
  };
  const request_config: AxiosRequestConfig = {
    method: "delete",
    baseURL,
    url: "/geo-model/data/geo-model-series",
    data,
  };
  try {
    const response = await axios(request_config);
    return response;
  } catch (error) {
    if (error.response) {
      console.log("PUT-Series failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

export async function putSurfaceApi(surface: Surface) {
  const data: Surface = {
    name: surface.name,
    serie: surface.serie,
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-surfaces",
    data,
  };
  try {
    const response = await axios(request_config);
    return response;
  } catch (error) {
    if (error.response) {
      console.log("PUT-Surface failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

export async function deleteSurfaceApi(surface: Surface) {
  const data: Surface = {
    name: surface.name,
    serie: surface.serie,
  };
  const request_config: AxiosRequestConfig = {
    method: "delete",
    baseURL,
    url: "/geo-model/data/geo-model-surfaces",
    data,
  };
  try {
    const response = await axios(request_config);
    return response;
  } catch (error) {
    if (error.response) {
      console.log("DELETE-Series failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

export async function putSurfacPointeApi(surfacePoint: SurfacePoint) {
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
  };
  const request_config: AxiosRequestConfig = {
    method: "put",
    baseURL,
    url: "/geo-model/data/geo-model-surface-points",
    data,
  };
  try {
    const response = await axios(request_config);
    return response;
  } catch (error) {
    if (error.response) {
      console.log("PUT-SurfacePoint failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

export async function deleteSurfacPointeApi(surfacePoint: SurfacePoint) {
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
  };
  const request_config: AxiosRequestConfig = {
    method: "delete",
    baseURL,
    url: "/geo-model/data/geo-model-surface-points",
    data,
  };
  try {
    const response = await axios(request_config);
    return response;
  } catch (error) {
    if (error.response) {
      console.log(
        "Delete-SurfacePoint failed with: ",
        error.response.data.error
      );
    } else {
      console.log("Unknown error: ", error);
    }
  }
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

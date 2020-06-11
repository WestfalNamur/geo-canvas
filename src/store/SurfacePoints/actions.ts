import {
  SurfacePoint,
  GET_SURFACEPOINTS,
  PUT_SURFACEPOINT,
  DELETE_SURFACEPOINT,
} from "./types";

export function getSurfacePoints(newSurfacePoints: SurfacePoint[]) {
  return {
    type: GET_SURFACEPOINTS,
    payload: newSurfacePoints,
  };
}

export function putSurfacePoint(surfacePoint: SurfacePoint) {
  return {
    type: PUT_SURFACEPOINT,
    payload: surfacePoint,
  };
}

export function deleteSurfacePoint(surfacePoint: SurfacePoint) {
  return {
    type: DELETE_SURFACEPOINT,
    payload: surfacePoint,
  };
}

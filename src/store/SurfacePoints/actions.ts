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

export function putOrientation(surfacePoint: SurfacePoint) {
  return {
    type: PUT_SURFACEPOINT,
    payload: surfacePoint,
  };
}

export function deleteOrientation(surfacePoint: SurfacePoint) {
  return {
    type: DELETE_SURFACEPOINT,
    payload: surfacePoint,
  };
}

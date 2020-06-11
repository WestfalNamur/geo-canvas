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
  surfacePoint.id = `${surfacePoint.x}${surfacePoint.y}${surfacePoint.z}`;
  return {
    type: PUT_SURFACEPOINT,
    payload: surfacePoint,
  };
}

export function deleteSurfacePoint(surfacePoint: SurfacePoint) {
  surfacePoint.id = `${surfacePoint.x}${surfacePoint.y}${surfacePoint.z}`;
  return {
    type: DELETE_SURFACEPOINT,
    payload: surfacePoint,
  };
}

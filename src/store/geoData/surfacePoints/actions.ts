import {
  SurfacePoint,
  GET_SURFACEPOINTS,
  ADD_SURFACEPOINTS_FROM_SERVER,
  ADD_SURFACEPOINT,
  ADD_SURFACEPOINT_FAILED,
  PUT_SURFACEPOINT,
  PUT_SURFACEPOINT_FAILED,
  DELETE_SURFACEPOINT,
  DELETE_SURFACEPOINT_FAILED,
  ADD_SURFACEPOINT_TO_LINE,
  CLEAR_LINE,
  PARA_LINE,
} from "./types";

export function getSurfacePoints() {
  return {
    type: GET_SURFACEPOINTS,
  };
}

export function addSurfacePointsFromServer(newSurfacePoints: SurfacePoint[]) {
  return {
    type: ADD_SURFACEPOINTS_FROM_SERVER,
    payload: newSurfacePoints,
  };
}

export function addSurfacePoint(surfacePoint: SurfacePoint) {
  return {
    type: ADD_SURFACEPOINT,
    payload: surfacePoint,
  };
}

export function addSurfacePointFailed(surfacePoint: SurfacePoint) {
  return {
    type: ADD_SURFACEPOINT_FAILED,
    payload: surfacePoint,
  };
}

export function putSurfacePoint(
  newSurfacePoint: SurfacePoint,
  oldSurfacePoint: SurfacePoint
) {
  return {
    type: PUT_SURFACEPOINT,
    payload: {
      newSurfacePoint,
      oldSurfacePoint,
    },
  };
}

export function putSurfacePointFailed(
  newSurfacePoint: SurfacePoint,
  oldSurfacePoint: SurfacePoint
) {
  return {
    type: PUT_SURFACEPOINT_FAILED,
    payload: {
      newSurfacePoint,
      oldSurfacePoint,
    },
  };
}

export function deleteSurfacePoint(surfacePoint: SurfacePoint) {
  return {
    type: DELETE_SURFACEPOINT,
    payload: surfacePoint,
  };
}

export function deleteSurfacePointFailed(surfacePoint: SurfacePoint) {
  return {
    type: DELETE_SURFACEPOINT_FAILED,
    payload: surfacePoint,
  };
}

export function addSurfacePointToLine(surfacePoint: SurfacePoint) {
  return {
    type: ADD_SURFACEPOINT_TO_LINE,
    payload: surfacePoint,
  };
}

export function clearLine() {
  return {
    type: CLEAR_LINE,
  };
}

export function paraLine() {
  return {
    type: PARA_LINE,
  };
}

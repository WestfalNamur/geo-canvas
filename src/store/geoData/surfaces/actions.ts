import {
  Surface,
  GET_SURFACES,
  ADD_SUFACES_FROM_SERVER,
  ADD_SURFACE,
  ADD_SURFACE_FAILED,
  PUT_SURFACE,
  PUT_SURFACE_FAILED,
  DELETE_SURFACE,
  DELETE_SURFACE_FAILED,
} from "./types";

export function getSurfaces() {
  return {
    type: GET_SURFACES,
  };
}

export function getSurfacesFromServer(surfaces: Surface[]) {
  return {
    type: ADD_SUFACES_FROM_SERVER,
    payload: surfaces,
  };
}

export function addSurface(surface: Surface) {
  return {
    type: ADD_SURFACE,
    payload: surface,
  };
}

export function addSurfaceFailed(surface: Surface) {
  return {
    type: ADD_SURFACE_FAILED,
    payload: surface,
  };
}

export function putSurface(newSurface: Surface, oldSurface: Surface) {
  return {
    type: PUT_SURFACE,
    payload: {
      newSurface,
      oldSurface,
    },
  };
}

export function putSurfaceFailed(newSurface: Surface, oldSurface: Surface) {
  return {
    type: PUT_SURFACE_FAILED,
    payload: {
      newSurface,
      oldSurface,
    },
  };
}

export function deleteSurface(surface: Surface) {
  return {
    type: DELETE_SURFACE,
    payload: surface,
  };
}

export function deleteSurfaceFailed(surface: Surface) {
  return {
    type: DELETE_SURFACE_FAILED,
    payload: surface,
  };
}

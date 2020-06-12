import { Surface, GET_SURFACES, PUT_SURFACE, DELETE_SURFACE } from "./types";

export function getSurfaces(newSurfaces: Surface[]) {
  return {
    type: GET_SURFACES,
    payload: newSurfaces,
  };
}

export function putSurface(surface: Surface) {
  return {
    type: PUT_SURFACE,
    payload: surface,
  };
}

export function deleteSurface(surface: Surface) {
  return {
    type: DELETE_SURFACE,
    payload: surface,
  };
}

import {
  SurfacesState,
  SufacesActionTypes,
  ADD_SUFACES_FROM_SERVER,
  ADD_SURFACE,
  ADD_SURFACE_FAILED,
  PUT_SURFACE,
  PUT_SURFACE_FAILED,
  DELETE_SURFACE,
  DELETE_SURFACE_FAILED,
} from "./types";

const initialState: SurfacesState = {
  surfaces: [],
};

export function surfacesReducer(
  state = initialState,
  action: SufacesActionTypes
): SurfacesState {
  switch (action.type) {
    case ADD_SUFACES_FROM_SERVER:
      return {
        surfaces: action.payload,
      };
    case ADD_SURFACE:
      return {
        surfaces: [...state.surfaces, action.payload],
      };
    case ADD_SURFACE_FAILED:
      return {
        surfaces: state.surfaces.filter(
          (surface) => surface.name !== action.payload.name
        ),
      };
    case PUT_SURFACE:
      const filteredSurfacesPut = state.surfaces.filter(
        (surface) => surface.name !== action.payload.oldSurface.name
      );
      return {
        surfaces: [...filteredSurfacesPut, action.payload.newSurface],
      };
    case PUT_SURFACE_FAILED:
      const filteredSurfacesPutFailed = state.surfaces.filter(
        (surface) => surface.name !== action.payload.newSurface.name
      );
      return {
        surfaces: [...filteredSurfacesPutFailed, action.payload.oldSurface],
      };
    case DELETE_SURFACE:
      return {
        surfaces: state.surfaces.filter(
          (surface) => surface.name !== action.payload.name
        ),
      };
    case DELETE_SURFACE_FAILED:
      return {
        surfaces: [...state.surfaces, action.payload],
      };
    default:
      return state;
  }
}

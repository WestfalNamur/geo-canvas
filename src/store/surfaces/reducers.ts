import {
  SurfacesState,
  SufacesActionTypes,
  GET_SURFACES,
  PUT_SURFACE,
  DELETE_SURFACE,
} from "./types";

const initialState: SurfacesState = {
  surfaces: []
};

export function surfacesReducer(
  state = initialState,
  action: SufacesActionTypes
): SurfacesState {
  switch (action.type) {
    case GET_SURFACES:
      return {
        surfaces: action.payload,
      };
    case PUT_SURFACE:
      const filteredSurfaces = state.surfaces.filter(
        (surface) => surface.name !== action.payload.name
      );
      return {
        surfaces: [...filteredSurfaces, action.payload],
      };
    case DELETE_SURFACE:
      return {
        surfaces: state.surfaces.filter(
          (surface) => surface.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
}

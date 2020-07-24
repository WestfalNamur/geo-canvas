import {
  SelectedSurfacePoint,
  UPDATE_SELECTED_SURFACE_POINT,
  SelectedSurface,
  UPDATE_SELECTED_SURFACE,
  SelectedOrientation,
  UPDATE_SELECTED_ORIENTAION,
} from "./types";

export function updateSelectedSurfacePoint(
  selectedSurfacePoint: SelectedSurfacePoint
) {
  return {
    type: UPDATE_SELECTED_SURFACE_POINT,
    payload: selectedSurfacePoint,
  };
}

export function updateSelectedSurface(selectedSurface: SelectedSurface) {
  return {
    type: UPDATE_SELECTED_SURFACE,
    payload: selectedSurface,
  };
}

export function updateSelectedOrientaion(
  selectedOrientation: SelectedOrientation
) {
  return {
    type: UPDATE_SELECTED_ORIENTAION,
    payload: selectedOrientation,
  };
}

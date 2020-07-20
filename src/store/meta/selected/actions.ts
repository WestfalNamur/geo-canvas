import {
  SelectedSurfacePoint,
  UPDATE_SELECTED_SURFACE_POINT,
  SelectedSurface,
  UPDATE_SELECTED_SURFACE,
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

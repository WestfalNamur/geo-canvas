import { SelectedSurfacePoint, UPDATE_SELECTED_SURFACE_POINT } from "./types";

export function updateSelectedSurfacePoint(
  selectedSurfacePoint: SelectedSurfacePoint
) {
  return {
    type: UPDATE_SELECTED_SURFACE_POINT,
    payload: selectedSurfacePoint,
  };
}

import {
  SelectedSurfacePoint,
  UPDATE_SELECTED_SURFACE_POINT,
  SelectedSurface,
  UPDATE_SELECTED_SURFACE,
  SelectedOrientation,
  UPDATE_SELECTED_ORIENTAION,
  SelectedDrawingOption,
  UPDATE_SELECTED_DRAWING_OPTION,
  TOGGLE_SHOW_IE,
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

export function updateSelectedDrawingOption(
  selectedDrawingOption: SelectedDrawingOption
) {
  return {
    type: UPDATE_SELECTED_DRAWING_OPTION,
    payload: selectedDrawingOption,
  };
}

export function toggleShowIE() {
  return {
    type: TOGGLE_SHOW_IE,
  };
}

export const UPDATE_SELECTED_SURFACE_POINT = "UPDATE_SELECTED_SURFACE_POINT";
export const UPDATE_SELECTED_SURFACE = "UPDATE_SELECTED_SURFACE";
export const UPDATE_SELECTED_ORIENTAION = "UPDATE_SELECTED_ORIENTAION";

export interface SelectedSurfacePoint {
  id: number | null;
}

export interface SelectedSurface {
  name: string | null;
}

export interface SelectedOrientation {
  id: number | null;
}

export interface SelectionsState {
  selectedSurfacePoint: SelectedSurfacePoint;
  selectedSurface: SelectedSurface;
  selecledOrientaion: SelectedOrientation;
}

export interface UpdateSelectedSurfacePointActionType {
  type: typeof UPDATE_SELECTED_SURFACE_POINT;
  payload: SelectedSurfacePoint;
}

export interface UpdateSelectedSurfaceActionType {
  type: typeof UPDATE_SELECTED_SURFACE;
  payload: SelectedSurface;
}

export interface UpdateOrientationActionType {
  type: typeof UPDATE_SELECTED_ORIENTAION;
  payload: SelectedOrientation;
}

export type SelectionsActionTypes =
  | UpdateSelectedSurfacePointActionType
  | UpdateSelectedSurfaceActionType
  | UpdateOrientationActionType;

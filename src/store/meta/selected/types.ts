export const UPDATE_SELECTED_SURFACE_POINT = "UPDATE_SELECTED_SURFACE_POINT";
export const UPDATE_SELECTED_SURFACE = "UPDATE_SELECTED_SURFACE";

export interface SelectedSurfacePoint {
  id: number | null;
}

export interface SelectedSurface {
  name: string | null;
}

export interface SelectionsState {
  selectedSurfacePoint: SelectedSurfacePoint;
  selectedSurface: SelectedSurface;
}

export interface UpdateSelectedSurfacePointActionType {
  type: typeof UPDATE_SELECTED_SURFACE_POINT;
  payload: SelectedSurfacePoint;
}

export interface UpdateSelectedSurfaceActionType {
  type: typeof UPDATE_SELECTED_SURFACE;
  payload: SelectedSurface;
}

export type SelectionsActionTypes =
  | UpdateSelectedSurfacePointActionType
  | UpdateSelectedSurfaceActionType;

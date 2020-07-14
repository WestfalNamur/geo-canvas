export const UPDATE_SELECTED_SURFACE_POINT = "UPDATE_SELECTED_SURFACE_POINT";

export interface SelectedSurfacePoint {
  id: number | null;
}

export interface SelectionsState {
  selectedSurfacePoint: SelectedSurfacePoint;
}

export interface UpdateSelectedSurfacePointActionType {
  type: typeof UPDATE_SELECTED_SURFACE_POINT;
  payload: SelectedSurfacePoint;
}

export type SelectionsActionTypes = UpdateSelectedSurfacePointActionType;

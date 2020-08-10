export const UPDATE_SELECTED_SURFACE_POINT = "UPDATE_SELECTED_SURFACE_POINT";
export const UPDATE_SELECTED_SURFACE = "UPDATE_SELECTED_SURFACE";
export const UPDATE_SELECTED_ORIENTAION = "UPDATE_SELECTED_ORIENTAION";
export const UPDATE_SELECTED_DRAWING_OPTION = "UPDATE_SELECTED_DRAWING_OPTION";
export const TOGGLE_SHOW_IE = "TOGGLE_SHOW_IE";

export interface SelectedSurfacePoint {
  id: number | null;
}

export interface SelectedSurface {
  name: string | null;
}

export interface SelectedOrientation {
  id: number | null;
}

export interface SelectedDrawingOption {
  option: string | null;
}

export interface ShowIE {
  showIe: boolean;
}

export interface SelectionsState {
  selectedSurfacePoint: SelectedSurfacePoint;
  selectedSurface: SelectedSurface;
  selecledOrientaion: SelectedOrientation;
  selectedDrawingOption: SelectedDrawingOption;
  showIE: ShowIE;
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

export interface UpdateSelectedDrawingOptionActionType {
  type: typeof UPDATE_SELECTED_DRAWING_OPTION;
  payload: SelectedDrawingOption;
}

export interface ShowIEActionType {
  type: typeof TOGGLE_SHOW_IE;
}

export type SelectionsActionTypes =
  | UpdateSelectedSurfacePointActionType
  | UpdateSelectedSurfaceActionType
  | UpdateOrientationActionType
  | UpdateSelectedDrawingOptionActionType
  | ShowIEActionType;

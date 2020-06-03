export const UPDATE_EXTENT = "UPDATE_EXTENT";

export interface Extent {
  xmin: number;
  xmax: number;
  ymix: number;
  ymax: number;
  zmix: number;
  zmax: number;
}

export interface ExtentState {
  extent: Extent;
}

export interface UpdateExtentActionType {
  type: typeof UPDATE_EXTENT;
  payload: Extent;
}

export type ExtentActionTypes = UpdateExtentActionType;

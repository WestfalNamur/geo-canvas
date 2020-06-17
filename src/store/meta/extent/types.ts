export const UPDATE_EXTENT = "UPDATE_EXTENT";

export interface Extent {
  xmin: number;
  xmax: number;
  ymin: number;
  ymax: number;
  zmin: number;
  zmax: number;
}

export interface ExtentValue {
  name: string;
  value: number;
}

export interface ExtentState {
  extent: Extent;
}

export interface UpdateExtentActionType {
  type: typeof UPDATE_EXTENT;
  payload: ExtentValue;
}

export type ExtentActionTypes = UpdateExtentActionType;

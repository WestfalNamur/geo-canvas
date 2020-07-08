export const GET_EXTENT = "GET_EXTENT";
export const GET_EXTENT_FROM_SERVER = "GET_EXTENT_FROM_SERVER";
export const UPDATE_EXTENT = "UPDATE_EXTENT";
export const UPDATE_EXTENT_FAILED = "UPDATE_EXTENT_FAILED";

export interface Extent {
  x_min: number;
  x_max: number;
  y_min: number;
  y_max: number;
  z_min: number;
  z_max: number;
}

export interface ExtentState {
  extent: Extent;
}

export interface GetExtentActionType {
  type: typeof GET_EXTENT;
}

export interface GetExtentFromServerActionType {
  type: typeof GET_EXTENT_FROM_SERVER;
  payload: Extent;
}

export interface UpdateExtentActionType {
  type: typeof UPDATE_EXTENT;
  payload: {
    newExtent: Extent;
    oldExtent: Extent;
  };
}

export interface UpdateExtentFailedActionType {
  type: typeof UPDATE_EXTENT_FAILED;
  payload: {
    newExtent: Extent;
    oldExtent: Extent;
  };
}

export type ExtentActionTypes =
  | GetExtentActionType
  | GetExtentFromServerActionType
  | UpdateExtentActionType
  | UpdateExtentFailedActionType;

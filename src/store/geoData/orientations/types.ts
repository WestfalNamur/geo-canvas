export const GET_ORIENTATIONS = "GET_ORIENTATIONS";
export const ADD_ORIENTATIONS_FROM_SERVER = "ADD_ORIENTATIONS_FROM_SERVER";
export const ADD_ORIENTATION = "ADD_ORIENTATION";
export const ADD_ORIENTATION_FAILED = "ADD_ORIENTATION_FAILED";
export const PUT_ORIENTATION = "PUT_ORIENTATION";
export const PUT_ORIENTATION_FAILED = "PUT_ORIENTATION_FAILED";
export const DELETE_ORIENTATION = "DELETE_ORIENTATION";
export const DELETE_ORIENTATION_FAILED = "DELETE_ORIENTATION_FAILED";

export interface Orientation {
  id: string;
  x: number;
  y: number;
  z: number;
  azimuth: number;
  dip: number;
  polarity: number;
  surface: string;
  probdist: string;
  param1: number;
  param2: number;
  active: boolean;
  locstr: string;
}

export interface OrientationsState {
  orientations: Orientation[];
}

export interface GetOrientationsActionType {
  type: typeof GET_ORIENTATIONS;
}

export interface AddOrientationsFromServerActionType {
  type: typeof ADD_ORIENTATIONS_FROM_SERVER;
  payload: Orientation[];
}

export interface AddOrientaionActionType {
  type: typeof ADD_ORIENTATION;
  payload: Orientation;
}

export interface AddOrientaionFailedActionType {
  type: typeof ADD_ORIENTATION_FAILED;
  payload: Orientation;
}

export interface PutOrientationActionType {
  type: typeof PUT_ORIENTATION;
  payload: {
    oldOrientation: Orientation;
    newOrientation: Orientation;
  };
}

export interface PutOrientationFaildActionType {
  type: typeof PUT_ORIENTATION_FAILED;
  payload: {
    oldOrientation: Orientation;
    newOrientation: Orientation;
  };
}

export interface DeleteOrientationActionType {
  type: typeof DELETE_ORIENTATION;
  payload: Orientation;
}

export interface DeleteOrientationFailedActionType {
  type: typeof DELETE_ORIENTATION_FAILED;
  payload: Orientation;
}

export type OrientationActionTypes =
  | GetOrientationsActionType
  | AddOrientationsFromServerActionType
  | AddOrientaionActionType
  | AddOrientaionFailedActionType
  | PutOrientationActionType
  | PutOrientationFaildActionType
  | DeleteOrientationActionType
  | DeleteOrientationFailedActionType;

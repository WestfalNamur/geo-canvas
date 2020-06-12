export const GET_ORIENTATIONS = "GET_ORIENTATIONS";
export const PUT_ORIENTATION = "PUT_ORIENTATION";
export const DELETE_ORIENTATION = "DELETE_ORIENTATION";

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
}

export interface OrientationsState {
  orientations: Orientation[];
}

export interface GetOrientationsActionType {
  type: typeof GET_ORIENTATIONS;
  payload: Orientation[];
}

export interface PutOrientationActionType {
  type: typeof PUT_ORIENTATION;
  payload: Orientation;
}

export interface DeleteOrientationActionType {
  type: typeof DELETE_ORIENTATION;
  payload: Orientation;
}

export type OrientationActionTypes =
  | GetOrientationsActionType
  | PutOrientationActionType
  | DeleteOrientationActionType;

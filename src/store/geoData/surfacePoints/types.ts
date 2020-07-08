export const GET_SURFACEPOINTS = "GET_SURFACEPOINTS";
export const ADD_SURFACEPOINTS_FROM_SERVER = "ADD_SURFACEPOINTS_FROM_SERVER";
export const ADD_SURFACEPOINT = "ADD_SURFACEPOINT";
export const ADD_SURFACEPOINT_FAILED = "ADD_SURFACEPOINT_FAILED";
export const PUT_SURFACEPOINT = "PUT_SURFACEPOINT";
export const PUT_SURFACEPOINT_FAILED = "PUT_SURFACEPOINT_FAILED";
export const DELETE_SURFACEPOINT = "DELETE_SURFACEPOINT";
export const DELETE_SURFACEPOINT_FAILED = "DELETE_SURFACEPOINT_FAILED";

export interface SurfacePoint {
  id: string;
  x: number;
  y: number;
  z: number;
  surface: string;
  probdist: string;
  param1: number;
  param2: number;
  active: boolean;
  locstr: string;
}

export interface SurfacePointsState {
  surfacePoints: SurfacePoint[];
}

export interface GetSurfacePointsActionType {
  type: typeof GET_SURFACEPOINTS;
}

export interface AddSurfacePointsFromServerActionType {
  type: typeof ADD_SURFACEPOINTS_FROM_SERVER;
  payload: SurfacePoint[];
}

export interface AddSurfacePointActionType {
  type: typeof ADD_SURFACEPOINT;
  payload: SurfacePoint;
}

export interface AddSurfacePointFailedActionType {
  type: typeof ADD_SURFACEPOINT_FAILED;
  payload: SurfacePoint;
}

export interface PutSurfacePointActionType {
  type: typeof PUT_SURFACEPOINT;
  payload: {
    oldSurfacePoint: SurfacePoint;
    newSurfacePoint: SurfacePoint;
  };
}

export interface PutSurfacePointFailedActionType {
  type: typeof PUT_SURFACEPOINT_FAILED;
  payload: {
    oldSurfacePoint: SurfacePoint;
    newSurfacePoint: SurfacePoint;
  };
}

export interface DeleteSurfacePointActionType {
  type: typeof DELETE_SURFACEPOINT;
  payload: SurfacePoint;
}

export interface DeleteSurfacePointFailedActionType {
  type: typeof DELETE_SURFACEPOINT_FAILED;
  payload: SurfacePoint;
}

export type SurfacePointActionTypes =
  | GetSurfacePointsActionType
  | AddSurfacePointsFromServerActionType
  | AddSurfacePointActionType
  | AddSurfacePointFailedActionType
  | PutSurfacePointActionType
  | PutSurfacePointFailedActionType
  | DeleteSurfacePointActionType
  | DeleteSurfacePointFailedActionType;

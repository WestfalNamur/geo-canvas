export const GET_SURFACEPOINTS = "GET_SURFACEPOINTS";
export const PUT_SURFACEPOINT = "PUT_SURFACEPOINT";
export const DELETE_SURFACEPOINT = "DELETE_SURFACEPOINT";

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
}

export interface SurfacePointsState {
  surfacePoints: SurfacePoint[];
}

export interface GetSurfacePointsActionType {
  type: typeof GET_SURFACEPOINTS;
  payload: SurfacePoint[];
}

export interface PutSurfacePointActionType {
  type: typeof PUT_SURFACEPOINT;
  payload: SurfacePoint;
}

export interface DeleteSurfacePointActionType {
  type: typeof DELETE_SURFACEPOINT;
  payload: SurfacePoint;
}

export type SurfacePointActionTypes =
  | GetSurfacePointsActionType
  | PutSurfacePointActionType
  | DeleteSurfacePointActionType;

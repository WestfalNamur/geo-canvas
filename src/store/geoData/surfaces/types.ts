export const GET_SURFACES = "GET_SURFACES";
export const ADD_SUFACES_FROM_SERVER = "ADD_SUFACES_FROM_SERVER";
export const ADD_SURFACE = "ADD_SURFACE";
export const ADD_SURFACE_FAILED = "ADD_SURFACE_FAILED";
export const PUT_SURFACE = "PUT_SURFACE";
export const PUT_SURFACE_FAILED = "PUT_SURFACE_FAILED";
export const DELETE_SURFACE = "DELETE_SURFACE";
export const DELETE_SURFACE_FAILED = "DELETE_SURFACE_FAILED";

export interface Surface {
  name: string;
  serie: string;
}

export interface SurfacesState {
  surfaces: Surface[];
}

export interface GetSurfacesActionType {
  type: typeof GET_SURFACES;
}

export interface AddSurfaceFromServerActionType {
  type: typeof ADD_SUFACES_FROM_SERVER;
  payload: Surface[];
}

export interface AddSurfaceActionType {
  type: typeof ADD_SURFACE;
  payload: Surface;
}

export interface AddSurfaceFailedActionType {
  type: typeof ADD_SURFACE_FAILED;
  payload: Surface;
}

export interface PutSurfaceActionType {
  type: typeof PUT_SURFACE;
  payload: {
    oldSurface: Surface;
    newSurface: Surface;
  };
}

export interface PutSurfaceFailedActionType {
  type: typeof PUT_SURFACE_FAILED;
  payload: {
    oldSurface: Surface;
    newSurface: Surface;
  };
}

export interface DeleteSurfaceActionType {
  type: typeof DELETE_SURFACE;
  payload: Surface;
}

export interface DeleteSurfaceFailedActionType {
  type: typeof DELETE_SURFACE_FAILED;
  payload: Surface;
}

export type SufacesActionTypes =
  | GetSurfacesActionType
  | AddSurfaceFromServerActionType
  | AddSurfaceActionType
  | AddSurfaceFailedActionType
  | PutSurfaceActionType
  | PutSurfaceFailedActionType
  | DeleteSurfaceActionType
  | DeleteSurfaceFailedActionType;

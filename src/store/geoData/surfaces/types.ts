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
  payload: Surface[];
}

export interface PutSurfaceActionType {
  type: typeof PUT_SURFACE;
  payload: Surface;
}

export interface DeleteSurfaceAvtionType {
  type: typeof DELETE_SURFACE;
  payload: Surface;
}

export type SufacesActionTypes =
  | GetSurfacesActionType
  | PutSurfaceActionType
  | DeleteSurfaceAvtionType;

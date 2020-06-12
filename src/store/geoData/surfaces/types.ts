export const GET_SURFACES = "GET_SURFACES";
export const PUT_SURFACE = "PUT_SURFACE";
export const DELETE_SURFACE = "DELETE_SURFACE";

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

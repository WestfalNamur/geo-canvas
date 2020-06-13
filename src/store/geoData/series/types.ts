export const ADD_SERIE = "ADD_SERIE";
export const ADD_SERIE_FAILED = "ADD_SERIE_FAILED";
export const PUT_SERIE = "PUT_SERIE";
export const DELTE_SERIE = "DELETE_SERIE";

export interface Serie {
  name: string;
  isfault: boolean;
}

export interface SeriesState {
  series: Serie[];
}

export interface AddSerieActionType {
  type: typeof ADD_SERIE;
  payload: Serie;
}

export interface AddSerieFailedActionType {
  type: typeof ADD_SERIE_FAILED;
  payload: Serie
}

export interface PutSerieActionType {
  type: typeof PUT_SERIE;
  payload: {
    oldSerie: Serie;
    newSerie: Serie;
  };
}

export interface DeleteSerieActionType {
  type: typeof DELTE_SERIE;
  payload: Serie;
}

export type SeriesActionTypes =
  | AddSerieActionType
  | AddSerieFailedActionType
  | PutSerieActionType
  | DeleteSerieActionType;

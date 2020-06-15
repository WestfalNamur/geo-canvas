export const GET_SERIES = "GET_SERIES";
export const ADD_SERIES_FROM_SERVER = "ADD_SERIES_FROM_SERVER";
export const ADD_SERIE = "ADD_SERIE";
export const ADD_SERIE_FAILED = "ADD_SERIE_FAILED";
export const PUT_SERIE = "PUT_SERIE";
export const PUT_SERIE_FAILED = "PUT_SERIE_FAILED";
export const DELTE_SERIE = "DELETE_SERIE";
export const DELTE_SERIE_FAILED = "DELETE_SERIE_FAILED";

export interface Serie {
  name: string;
  isfault: boolean;
}

export interface SeriesState {
  series: Serie[];
}

export interface GetSeriesActionType {
  type: typeof GET_SERIES;
}

export interface AddSeriesFromServerActionType {
  type: typeof ADD_SERIES_FROM_SERVER;
  payload: Serie[];
}

export interface AddSerieActionType {
  type: typeof ADD_SERIE;
  payload: Serie;
}

export interface AddSerieFailedActionType {
  type: typeof ADD_SERIE_FAILED;
  payload: Serie;
}

export interface PutSerieActionType {
  type: typeof PUT_SERIE;
  payload: {
    oldSerie: Serie;
    newSerie: Serie;
  };
}

export interface PutSerieFailedActionType {
  type: typeof PUT_SERIE_FAILED;
  payload: {
    oldSerie: Serie;
    newSerie: Serie;
  };
}

export interface DeleteSerieActionType {
  type: typeof DELTE_SERIE;
  payload: Serie;
}

export interface DeleteSerieFailedActionType {
  type: typeof DELTE_SERIE_FAILED;
  payload: Serie;
}

export type SeriesActionTypes =
  | GetSeriesActionType
  | AddSeriesFromServerActionType
  | AddSerieActionType
  | AddSerieFailedActionType
  | PutSerieActionType
  | PutSerieFailedActionType
  | DeleteSerieActionType
  | DeleteSerieFailedActionType;

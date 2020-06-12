export const GET_SERIES = "GET_SERIES";
export const PUT_SERIE = "PUT_SERIE";
export const DELTE_SERIE = "DELETE_SERIE";

export interface Serie {
  name: string;
  isfault: boolean;
}

export interface SeriesState {
  series: Serie[];
}

export interface GetSeriesActionType {
  type: typeof GET_SERIES;
  payload: Serie[];
}

export interface PutSerieActionType {
  type: typeof PUT_SERIE;
  payload: Serie;
}

export interface DeleteSerieActionType {
  type: typeof DELTE_SERIE;
  payload: Serie;
}

export type SeriesActionTypes =
  | GetSeriesActionType
  | PutSerieActionType
  | DeleteSerieActionType;

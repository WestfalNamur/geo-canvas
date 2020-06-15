import {
  Serie,
  GET_SERIES,
  ADD_SERIES_FROM_SERVER,
  ADD_SERIE,
  ADD_SERIE_FAILED,
  PUT_SERIE,
  PUT_SERIE_FAILED,
  DELTE_SERIE,
  DELTE_SERIE_FAILED,
} from "./types";

export function getSeries() {
  return {
    type: GET_SERIES,
  };
}

export function addSeriesFromServer(newSeries: Serie[]) {
  return {
    type: ADD_SERIES_FROM_SERVER,
    payload: newSeries,
  };
}

export function addSerie(newSerie: Serie) {
  return {
    type: ADD_SERIE,
    payload: newSerie,
  };
}

export function addSerieFailed(newSerie: Serie) {
  return {
    type: ADD_SERIE_FAILED,
    payload: newSerie,
  };
}

export function putSeries(newSerie: Serie, oldSerie: Serie) {
  return {
    type: PUT_SERIE,
    payload: {
      newSerie,
      oldSerie,
    },
  };
}

export function putSeriesFailed(newSerie: Serie, oldSerie: Serie) {
  return {
    type: PUT_SERIE_FAILED,
    payload: {
      newSerie,
      oldSerie,
    },
  };
}

export function deleteSeries(oldSerie: Serie) {
  return {
    type: DELTE_SERIE,
    payload: oldSerie,
  };
}

export function deleteSerieFailed(oldSerie: Serie) {
  return {
    type: DELTE_SERIE_FAILED,
    payload: oldSerie,
  };
}

import { Serie, GET_SERIES, PUT_SERIE, DELTE_SERIE } from "./types";

export function getSeries(newSeries: Serie[]) {
  return {
    type: GET_SERIES,
    payload: newSeries,
  };
}

export function putSeries(serie: Serie) {
  return {
    type: PUT_SERIE,
    payload: serie,
  };
}

export function deleteSeries(serie: Serie) {
  return {
    type: DELTE_SERIE,
    payload: serie,
  };
}

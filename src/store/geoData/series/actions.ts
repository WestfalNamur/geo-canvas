import { Serie, PUT_SERIE, DELTE_SERIE, ADD_SERIE } from "./types";

export function addSerie(newSerie: Serie) {
  return {
    type: ADD_SERIE,
    payload: {
      newSerie,
    },
  };
}

export function putSeries(newSerie: Serie, oldSerie: Serie) {
  return {
    type: PUT_SERIE,
    payload: {
      oldSerie,
      newSerie,
    },
  };
}

export function deleteSeries(oldSerie: Serie) {
  return {
    type: DELTE_SERIE,
    payload: {
      oldSerie,
    },
  };
}

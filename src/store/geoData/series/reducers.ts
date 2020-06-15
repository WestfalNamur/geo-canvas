import {
  SeriesState,
  SeriesActionTypes,
  ADD_SERIES_FROM_SERVER,
  ADD_SERIE,
  ADD_SERIE_FAILED,
  PUT_SERIE,
  PUT_SERIE_FAILED,
  DELTE_SERIE,
  DELTE_SERIE_FAILED,
} from "./types";

const initialState: SeriesState = {
  series: [],
};

export function seriesReducer(
  state = initialState,
  action: SeriesActionTypes
): SeriesState {
  switch (action.type) {
    case ADD_SERIES_FROM_SERVER:
      return {
        series: action.payload,
      };
    case ADD_SERIE:
      return {
        series: [...state.series, action.payload],
      };
    case ADD_SERIE_FAILED:
      return {
        series: state.series.filter(
          (serie) => serie.name !== action.payload.name
        ),
      };
    case PUT_SERIE:
      const filteredSeriesPut = state.series.filter(
        (serie) => serie.name !== action.payload.oldSerie.name
      );
      return {
        series: [...filteredSeriesPut, action.payload.newSerie],
      };
    case PUT_SERIE_FAILED:
      const filteredSeriesPutFailed = state.series.filter(
        (serie) => serie.name !== action.payload.newSerie.name
      );
      return {
        series: [...filteredSeriesPutFailed, action.payload.oldSerie],
      };
    case DELTE_SERIE:
      return {
        series: state.series.filter(
          (serie) => serie.name !== action.payload.name
        ),
      };
    case DELTE_SERIE_FAILED:
      return {
        series: [...state.series, action.payload],
      };
    default:
      return state;
  }
}

import {
  SeriesState,
  SeriesActionTypes,
  ADD_SERIE,
  ADD_SERIE_FAILED,
  PUT_SERIE,
  DELTE_SERIE,
} from "./types";

const initialState: SeriesState = {
  series: [],
};

export function seriesReducer(
  state = initialState,
  action: SeriesActionTypes
): SeriesState {
  switch (action.type) {
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
      const filteredSeries = state.series.filter(
        (serie) => serie.name !== action.payload.oldSerie.name
      );
      return {
        series: [...filteredSeries, action.payload.newSerie],
      };
    case DELTE_SERIE:
      return {
        series: state.series.filter(
          (serie) => serie.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
}

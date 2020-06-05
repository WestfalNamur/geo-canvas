import {
  SeriesState,
  SeriesActionTypes,
  GET_SERIES,
  PUT_SERIE,
  DELTE_SERIE,
} from "./types";

const initialState: SeriesState = {
  series: [
    { name: "Series0", isfault: false },
    { name: "Series1", isfault: false },
    { name: "Series2", isfault: false },
    { name: "Series3", isfault: false },
    { name: "FaultSeries", isfault: true },
  ],
};

export function seriesReducer(
  state = initialState,
  action: SeriesActionTypes
): SeriesState {
  switch (action.type) {
    case GET_SERIES:
      return {
        series: action.payload,
      };
    case PUT_SERIE:
      const filteredSeries = state.series.filter(
        (serie) => serie.name !== action.payload.name
      );
      return {
        series: [...filteredSeries, action.payload],
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

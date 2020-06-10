import { call, all, put, takeEvery } from "redux-saga/effects";
import { putSeriesApi } from "../api/geoData";
import { SeriesActionTypes } from "../store/series/types";

/*************************** Subroutines *************************************/

function* putSeriesIterator(action: SeriesActionTypes) {
  try {
    // TODO: fix type
    // @ts-ignore
    yield call(putSeriesApi, action.payload);
  } catch (error) {
    // TODO: revers newSerie to store
    console.log(error);
  }
}

/*************************** Watchers ***************************************/

function* watchPutSeries() {
  yield takeEvery("PUT_SERIE", putSeriesIterator);
}

export default function* rootSaga() {
  yield all([watchPutSeries()]);
}

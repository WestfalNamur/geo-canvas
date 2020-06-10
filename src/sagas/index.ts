import { call, all, takeEvery } from "redux-saga/effects";
import { putSerieApi } from "../api/geoData";
import { SeriesActionTypes } from "../store/series/types";

// TODO:
// add functionality for FAILED requests see: https://redux-saga.js.org/
// fix @ts-ignore

/*************************** Subroutines *************************************/
function* putSerieIterator(action: SeriesActionTypes) {
  try {
    // @ts-ignore
    yield call(putSerieApi, action.payload);
  } catch (error) {
    console.log(error);
  }
}

/*************************** Watchers ***************************************/

function* watchPutSeries() {
  yield takeEvery("PUT_SERIE", putSerieIterator);
}

export default function* rootSaga() {
  yield all([watchPutSeries()]);
}

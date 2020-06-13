import { call, all, takeEvery, put } from "redux-saga/effects";
import { putSerieApi, deleteSerieApi } from "../api/geoData/Series";
import { SeriesActionTypes } from "../store/geoData/series/types";

/*************************** Subroutines *************************************/
function* addSerieSaga(action: SeriesActionTypes) {
  console.log("Saga starts");
  try {
    console.log("Try putSerieApi");
    // @ts-ignore
    yield call(putSerieApi, action.payload);
  } catch (error) {
    console.log('Saga failed');
    yield put({ type: "ADD_SERIE_FAILED", payload: action.payload });
  }
}

/*************************** Watchers ***************************************/
export function* watchAddSerie() {
  yield takeEvery("ADD_SERIE", addSerieSaga);
}

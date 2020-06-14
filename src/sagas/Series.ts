import { call, all, takeEvery, put } from "redux-saga/effects";
import {
  getSerieApi,
  putSerieApi,
  deleteSerieApi,
} from "../api/geoData/Series";
import {
  Serie,
  GetSeriesActionType,
  AddSerieFailedActionType,
  PutSerieActionType,
} from "../store/geoData/series/types";

/*
 * BUG: Series can still be ranamed.
 * Update backend to accept POST (onyl when Serie not yet present.).
 * => PUT only works on existing Series;
 */
/*************************** Subroutines *************************************/
function* getSerieSaga(action: GetSeriesActionType) {
  try {
    const data = yield call(getSerieApi);
    yield put({ type: "ADD_SERIES_FROM_SERVER", payload: data });
  } catch (error) {
    if (error.response) {
      console.log("GET-Series failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

function* addSerieSaga(action: AddSerieFailedActionType) {
  try {
    // @ts-ignore
    yield call(putSerieApi, action.payload);
  } catch (error) {
    if (error.response) {
      console.log("PUT-Series failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "ADD_SERIE_FAILED", payload: action.payload });
  }
}

function* putSerieSage(action: PutSerieActionType) {
  const { newSerie } = action.payload;
  try {
    // @ts-ignore
    yield call(putSerieApi, newSerie);
  } catch (error) {
    if (error.response) {
      console.log("PUT-Series failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "PUT_SERIE_FAILED", payload: action.payload });
  }
}

/*************************** Watchers ***************************************/
export function* watchGetSeries() {
  yield takeEvery("GET_SERIES", getSerieSaga);
}

export function* watchAddSerie() {
  yield takeEvery("ADD_SERIE", addSerieSaga);
}

export function* watchPutSerie() {
  yield takeEvery("PUT_SERIE", putSerieSage);
}

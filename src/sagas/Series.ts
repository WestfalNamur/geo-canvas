import { call, takeEvery, put } from "redux-saga/effects";
import {
  getSerieApi,
  putSerieApi,
  deleteSerieApi,
} from "../api/geoData/Series";
import {
  GetSeriesActionType,
  AddSerieActionType,
  PutSerieActionType,
  DeleteSerieActionType,
} from "../store/geoData/series/types";

/*
 * TODO: Renaming now works by deleting and putAdd the updated data.
 * Write proper POST & PUT api.
 *  => handle deleteSurfacePointApi failure in PUT api;
 */

/*************************** Subroutines *************************************/
function* getSeriesSaga(action: GetSeriesActionType) {
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

function* addSerieSaga(action: AddSerieActionType) {
  try {
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

function* putSerieSaga(action: PutSerieActionType) {
  const { newSerie, oldSerie } = action.payload;
  try {
    yield call(deleteSerieApi, oldSerie);
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

function* deleteSerieSaga(action: DeleteSerieActionType) {
  try {
    yield call(deleteSerieApi, action.payload);
  } catch (error) {
    if (error.response) {
      console.log("DELETE-Series failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "DELETE_SERIE_FAILED", payload: action.payload });
  }
}

/*************************** Watchers ***************************************/
export function* watchGetSeries() {
  yield takeEvery("GET_SERIES", getSeriesSaga);
}

export function* watchAddSerie() {
  yield takeEvery("ADD_SERIE", addSerieSaga);
}

export function* watchPutSerie() {
  yield takeEvery("PUT_SERIE", putSerieSaga);
}

export function* watchDeleteSerie() {
  yield takeEvery("DELETE_SERIE", deleteSerieSaga);
}

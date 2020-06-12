import { call, all, takeEvery } from "redux-saga/effects";
import {
  putSerieApi,
  deleteSerieApi,
  putSurfaceApi,
  deleteSurfaceApi,
  putSurfacPointeApi,
  deleteSurfacPointeApi,
} from "../api/geoData";
import { SeriesActionTypes } from "../store/geoData/series/types";
import { SufacesActionTypes } from "../store/geoData/surfaces/types";
import { SurfacePointActionTypes } from "../store/geoData/SurfacePoints/types";

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

function* deleteSerieIterator(action: SeriesActionTypes) {
  try {
    // @ts-ignore
    yield call(deleteSerieApi, action.payload);
  } catch (error) {
    console.log(error);
  }
}

function* putSurfaceIterator(action: SufacesActionTypes) {
  try {
    // @ts-ignore
    yield call(putSurfaceApi, action.payload);
  } catch (error) {
    console.log(error);
  }
}

function* deleteSurfaceIterator(action: SufacesActionTypes) {
  try {
    // @ts-ignore
    yield call(deleteSurfaceApi, action.payload);
  } catch (error) {
    console.log(error);
  }
}

function* putSurfacePointIterator(action: SurfacePointActionTypes) {
  try {
    // @ts-ignore
    yield call(putSurfacPointeApi, action.payload);
  } catch (error) {
    console.log(error);
  }
}

function* deleteSurfacePointIterator(action: SurfacePointActionTypes) {
  try {
    // @ts-ignore
    yield call(deleteSurfacPointeApi, action.payload);
  } catch (error) {
    console.log(error);
  }
}

/*************************** Watchers ***************************************/

function* watchPutSeries() {
  yield takeEvery("PUT_SERIE", putSerieIterator);
}

function* watchDeleteSerie() {
  yield takeEvery("DELETE_SERIE", deleteSerieIterator);
}

function* watchPutSurface() {
  yield takeEvery("PUT_SURFACE", putSurfaceIterator);
}

function* watchDeleteSurface() {
  yield takeEvery("DELETE_SURFACE", deleteSurfaceIterator);
}

function* watchPutSurfacePoint() {
  yield takeEvery("PUT_SURFACEPOINT", putSurfacePointIterator);
}

function* watchDeleteSurfacePoint() {
  yield takeEvery("DELETE_SURFACEPOINT", deleteSurfacePointIterator);
}

export default function* rootSaga() {
  yield all([
    watchPutSeries(),
    watchDeleteSerie(),
    watchPutSurface(),
    watchDeleteSurface(),
    watchPutSurfacePoint(),
    watchDeleteSurfacePoint()
  ]);
}

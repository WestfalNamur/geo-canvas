import { call, all, takeEvery } from "redux-saga/effects";
import {
  deleteSerieApi,
  putSurfaceApi,
  deleteSurfaceApi,
  putSurfacPointeApi,
  deleteSurfacPointeApi,
  putOrientationApi,
  deleteOrientationApi,
} from "../api/geoData";
import { putSerieApi } from "../api/geoData/Series";
import { SeriesActionTypes } from "../store/geoData/series/types";
import { SufacesActionTypes } from "../store/geoData/surfaces/types";
import { SurfacePointActionTypes } from "../store/geoData/SurfacePoints/types";
import { OrientationActionTypes } from "../store/geoData/Orientations/types";
import { watchAddSerie } from './Series'

// TODO:
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

function* putOrienationIterator(action: OrientationActionTypes) {
  try {
    // @ts-ignore
    yield call(putOrientationApi, action.payload);
  } catch (error) {
    console.log(error);
  }
}

function* deleteOrientationIterator(action: OrientationActionTypes) {
  try {
    // @ts-ignore
    yield call(deleteOrientationApi, action.payload);
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

function* watchPutOrientation() {
  yield takeEvery("PUT_ORIENTATION", putOrienationIterator);
}

function* watchDelteOrientaion() {
  yield takeEvery("DELETE_ORIENTATION", deleteOrientationIterator);
}

export default function* rootSaga() {
  yield all([
    watchAddSerie(),

    watchPutSeries(),
    watchDeleteSerie(),
    watchPutSurface(),
    watchDeleteSurface(),
    watchPutSurfacePoint(),
    watchDeleteSurfacePoint(),
    watchPutOrientation(),
    watchDelteOrientaion(),
  ]);
}

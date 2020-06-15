import { call, takeEvery, put } from "redux-saga/effects";
import {
  getSurfaceApi,
  putSurfaceApi,
  deleteSurfaceApi,
} from "../api/geoData/Surfaces";
import {
  GetSurfacesActionType,
  AddSurfaceActionType,
  PutSurfaceActionType,
  DeleteSurfaceActionType,
} from "../store/geoData/surfaces/types";

/*
 * BUG: Surface can still be ranamed.
 * Update backend to accept POST (onyl when Surface not yet present.).
 * => PUT only works on existing Surface;
 */
/*************************** Subroutines *************************************/
function* getSurfacesSaga(action: GetSurfacesActionType) {
  try {
    const data = yield call(getSurfaceApi);
    yield put({ type: "ADD_SUFACES_FROM_SERVER", payload: data });
  } catch (error) {
    if (error.response) {
      console.log("GET-Surface failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

function* addSurfaceSaga(action: AddSurfaceActionType) {
  try {
    // @ts-ignore
    yield call(putSurfaceApi, action.payload);
  } catch (error) {
    if (error.response) {
      console.log("PUT-Surface failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "ADD_SURFACE_FAILED", payload: action.payload });
  }
}

function* putSurfaceSaga(action: PutSurfaceActionType) {
  const { newSurface } = action.payload;
  try {
    // @ts-ignore
    yield call(putSurfaceApi, newSurface);
  } catch (error) {
    if (error.response) {
      console.log("PUT-Surface failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "ADD_SURFACE_FAILED", payload: action.payload });
  }
}

function* deleteSurfaceSaga(action: DeleteSurfaceActionType) {
  try {
    yield call(deleteSurfaceApi, action.payload);
  } catch (error) {
    if (error.response) {
      console.log("DELETE-Surface failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "DELETE_SURFACE_FAILED", payload: action.payload });
  }
}

/*************************** Watchers ***************************************/
export function* watchGetSurfaces() {
  yield takeEvery("GET_SURFACES", getSurfacesSaga);
}

export function* watchAddSurface() {
  yield takeEvery("ADD_SURFACE", addSurfaceSaga);
}

export function* watchPutSurface() {
  yield takeEvery("PUT_SURFACE", putSurfaceSaga);
}

export function* watchDeleteSurface() {
  yield takeEvery("DELETE_SURFACE", deleteSurfaceSaga);
}

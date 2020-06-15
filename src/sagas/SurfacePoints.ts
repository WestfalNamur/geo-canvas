import { call, takeEvery, put } from "redux-saga/effects";
import {
  getSurfacePointApi,
  putSurfacePointApi,
  deleteSurfacePointApi,
} from "../api/geoData/SurfacePoints";
import {
  GetSurfacePointsActionType,
  AddSurfacePointActionType,
  PutSurfacePointActionType,
  DeleteSurfacePointActionType,
} from "../store/geoData/surfacePoints/types";

/*
 * BUG: surfacePoints can still be ranamed.
 * Update backend to accept POST (onyl when surfacePoints not yet present.).
 * => PUT only works on existing surfacePoints;
 */
/*************************** Subroutines *************************************/
function* getSurfacePointsSaga(action: GetSurfacePointsActionType) {
  try {
    const data = yield call(getSurfacePointApi);
    yield put({ type: "ADD_SURFACEPOINTS_FROM_SERVER", payload: data });
  } catch (error) {
    if (error.response) {
      console.log("GET-SurfacePoints failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

function* addSurfacePointsSaga(action: AddSurfacePointActionType) {
  try {
    // @ts-ignore
    yield call(putSurfacePointApi, action.payload);
  } catch (error) {
    if (error.response) {
      console.log("PUT-SurfacePoints failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "ADD_SURFACEPOINT_FAILED", payload: action.payload });
  }
}

function* putSurfacePointSaga(action: PutSurfacePointActionType) {
  const { newSurfacePoint } = action.payload;
  try {
    // @ts-ignore
    yield call(putSurfacePointApi, newSurfacePoint);
  } catch (error) {
    if (error.response) {
      console.log("PUT-SurfacePoints failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "PUT_SURFACEPOINT_FAILED", payload: action.payload });
  }
}

function* deleteSurfacePointSaga(action: DeleteSurfacePointActionType) {
  try {
    // @ts-ignore
    yield call(deleteSurfacePointApi, action.payload);
  } catch (error) {
    if (error.response) {
      console.log(
        "DELETE-SurfacePoints failed with: ",
        error.response.data.error
      );
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "DELETE_SURFACEPOINT_FAILED", payload: action.payload });
  }
}

/*************************** Watchers ***************************************/
export function* watchGetSurfacPoints() {
  yield takeEvery("GET_SURFACEPOINTS", getSurfacePointsSaga);
}

export function* watchAddSurfacePoint() {
  yield takeEvery("ADD_SURFACEPOINT", addSurfacePointsSaga);
}

export function* watchPutSurfacePoint() {
  yield takeEvery("PUT_SURFACEPOINT", putSurfacePointSaga);
}

export function* watchDeleteSurfacePoint() {
  yield takeEvery("DELETE_SURFACEPOINT", deleteSurfacePointSaga);
}

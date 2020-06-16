import { call, takeEvery, put } from "redux-saga/effects";
import {
  getOrientationsApi,
  putOrientationApi,
  deleteOrientationApi,
} from "../api/geoData/Orientations";
import {
  GetOrientationsActionType,
  AddOrientaionActionType,
  PutOrientationActionType,
  DeleteOrientationActionType,
} from "../store/geoData/orientations/types";

/*
 * TODO: Renaming now works by deleting and putAdd the updated data.
 * Write proper POST & PUT api.
 *  => handle deleteSurfacePointApi failure in PUT api;
 */

/*************************** Subroutines *************************************/
function* getOrientationsSaga(action: GetOrientationsActionType) {
  try {
    const data = yield call(getOrientationsApi);
    yield put({ type: "ADD_ORIENTATIONS_FROM_SERVER", payload: data });
  } catch (error) {
    if (error.response) {
      console.log("GET-Orientation failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

function* addOrientationSaga(action: AddOrientaionActionType) {
  try {
    yield call(putOrientationApi, action.payload);
  } catch (error) {
    if (error.response) {
      console.log("PUT-Orientation failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "ADD_ORIENTATION_FAILED", payload: action.payload });
  }
}

function* putOrientationSaga(action: PutOrientationActionType) {
  const { newOrientation, oldOrientation } = action.payload;
  try {
    yield call(deleteOrientationApi, oldOrientation);
    yield call(putOrientationApi, newOrientation);
  } catch (error) {
    if (error.response) {
      console.log("PUT-Orientation failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "PUT_ORIENTATION_FAILED", payload: action.payload });
  }
}

function* deleteOrientationSaga(action: DeleteOrientationActionType) {
  try {
    yield call(deleteOrientationApi, action.payload);
  } catch (error) {
    if (error.response) {
      console.log(
        "DELETE-Orientation failed with: ",
        error.response.data.error
      );
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "DELETE_ORIENTATION_FAILED", payload: action.payload });
  }
}

/*************************** Watchers ***************************************/
export function* watchGetOrientation() {
  yield takeEvery("GET_ORIENTATIONS", getOrientationsSaga);
}

export function* watchAddOrientation() {
  yield takeEvery("ADD_ORIENTATION", addOrientationSaga);
}

export function* watchPutOrientation() {
  yield takeEvery("PUT_ORIENTATION", putOrientationSaga);
}

export function* watchDeleteOrientation() {
  yield takeEvery("DELETE_ORIENTATION", deleteOrientationSaga);
}

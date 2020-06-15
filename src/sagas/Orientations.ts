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
 * BUG: orientations can still be ranamed.
 * Update backend to accept POST (onyl when orientations not yet present.).
 * => PUT only works on existing orientations;
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
    // @ts-ignore
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
  const { newOrientation } = action.payload;
  try {
    // @ts-ignore
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

import { call, takeEvery, put } from "redux-saga/effects";
import { getExtentApi, putExtentApi } from "../../api/meta/extent";
import {
  GetExtentActionType,
  UpdateExtentActionType,
} from "../../store/meta/extent/types";

/*************************** Subroutines *************************************/
function* getExtentSaga(action: GetExtentActionType) {
  try {
    const data = yield call(getExtentApi);
    yield put({ type: "GET_EXTENT_FROM_SERVER", payload: data });
  } catch (error) {
    if (error.response) {
      console.log("GET-Extent failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

function* putExtentSaga(action: UpdateExtentActionType) {
  const { newExtent } = action.payload;
  try {
    yield call(putExtentApi, newExtent);
  } catch (error) {
    if (error.response) {
      console.log("PUT-Extent failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "UPDATE_EXTENT_FAILED", payload: action.payload });
  }
}

/*************************** Watchers ***************************************/
export function* watchGetExtent() {
  yield takeEvery("GET_EXTENT", getExtentSaga);
}

export function* watchPutExtent() {
  yield takeEvery("UPDATE_EXTENT", putExtentSaga);
}

import { call, takeEvery, put } from "redux-saga/effects";
import { getSectionApi, putSectionApi } from "../../api/meta/section";
import {
  GetSectionActionType,
  UpdateSectionActionType,
} from "../../store/meta/section/types";

/*************************** Subroutines *************************************/
function* getSectionSaga(action: GetSectionActionType) {
  try {
    const data = yield call(getSectionApi);
    yield put({ type: "GET_SECTION_FROM_SERVER", payload: data });
  } catch (error) {
    if (error.response) {
      console.log("GET-Section failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

function* putSectionSaga(action: UpdateSectionActionType) {
  const { newSection } = action.payload;
  try {
    yield call(putSectionApi, newSection);
  } catch (error) {
    if (error.response) {
      console.log("PUT-Section failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
    yield put({ type: "UPDATE_SECTION_FAILED", payload: action.payload });
  }
}

/*************************** Watchers ***************************************/
export function* watchGetSection() {
  yield takeEvery("GET_SECTION", getSectionSaga);
}

export function* watchPutSection() {
  yield takeEvery("UPDATA_SECTION", putSectionSaga);
}

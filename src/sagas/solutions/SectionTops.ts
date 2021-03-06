import { call, put, debounce } from "redux-saga/effects";
import {
  getSectionTopsApi,
  getSectionTopsMultiApi,
} from "../../api/solutions/sectionTops";
import { GetSectionTopsActionType } from "../../store/solutions/sectionTops/types";

/*************************** Subroutines *************************************/
function* getSectionTopsSage(action: GetSectionTopsActionType) {
  try {
    const data = yield call(getSectionTopsApi);
    yield put({ type: "SET_SECTION_TOPS", payload: data });
  } catch (error) {
    if (error.response) {
      console.log("GET-SectionTops failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

function* getSectionTopsMultiSage(action: GetSectionTopsActionType) {
  try {
    const data = yield call(getSectionTopsMultiApi);
    console.log(data)
    yield put({ type: "SET_SECTION_TOPS", payload: data });
  } catch (error) {
    if (error.response) {
      console.log("GET-SectionTops failed with: ", error.response.data.error);
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

/*************************** Watchers ***************************************/
export function* watchGetSectionTopsSaga() {
  yield debounce(1000, "GET_SECTION_TOPS", getSectionTopsSage);
}

export function* watchGetSectionTopMultisSaga() {
  yield debounce(1000, "GET_SECTION_TOPS_MULTI", getSectionTopsMultiSage);
}

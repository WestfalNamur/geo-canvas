import { call, put, debounce } from "redux-saga/effects";
import { getSectionPolygonsApi } from "../../api/solutions/polygons";
import { GetSectionPolygonsActionType } from "../../store/solutions/sectionPolygons/types";

/*************************** Subroutines *************************************/
function* getSectionPolygonsSaga(action: GetSectionPolygonsActionType) {
  try {
    const data = yield call(getSectionPolygonsApi);
    yield put({ type: "SET_SECTION_POLYGONS", payload: data });
  } catch (error) {
    if (error.response) {
      console.log(
        "GET-SectionPolygons failed with: ",
        error.response.data.error
      );
    } else {
      console.log("Unknown error: ", error);
    }
  }
}

/*************************** Watchers ***************************************/
export function* watchGetSectionPolygonsSaga() {
  yield debounce(1000, "GET_SECTION_POLYGONS", getSectionPolygonsSaga);
}

import {
  SolutionsState,
  SET_SECTION_POLYGONS,
  SolutionsActionTypes,
} from "./types";

const initialState: SolutionsState = {
  sectionPolygons: [],
};

export function solutionsReducers(
  state = initialState,
  action: SolutionsActionTypes
): SolutionsState {
  switch (action.type) {
    case SET_SECTION_POLYGONS:
      return {
        sectionPolygons: action.payload,
      };
    default:
      return state;
  }
}

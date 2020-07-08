import {
  SectionState,
  SectionActionTypes,
  GET_SECTION_FROM_SERVER,
  UPDATE_SECTION,
  UPDATE_SECTION_FAILED,
} from "./types";

const initialState: SectionState = {
  section: {
    p1: [500, 0],
    p2: [500, 1000],
    resolution: [100, 100],
  },
};

export function sectionReducer(
  state = initialState,
  action: SectionActionTypes
): SectionState {
  switch (action.type) {
    case GET_SECTION_FROM_SERVER:
      return {
        section: action.payload,
      };
    case UPDATE_SECTION:
      return {
        section: action.payload.newSection,
      };
    case UPDATE_SECTION_FAILED:
      return {
        section: action.payload.oldSection,
      };
    default:
      return state;
  }
}

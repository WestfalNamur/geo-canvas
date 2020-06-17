import { SectionState, SectionActionTypes, UPDATE_SECTION } from "./types";

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
    case UPDATE_SECTION:
      return {
        section: action.payload,
      };
    default:
      return state;
  }
}

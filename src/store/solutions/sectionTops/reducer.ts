import {
  SectionTopsState,
  SET_SECTION_TOPS,
  SectionTopsActionTypes,
} from "./types";

const initialState: SectionTopsState = {
  sectionTops: [],
};

export function sectionTopsReducers(
  state = initialState,
  action: SectionTopsActionTypes
): SectionTopsState {
  switch (action.type) {
    case SET_SECTION_TOPS:
      return {
        sectionTops: action.payload,
      };
    default:
      return state;
  }
}

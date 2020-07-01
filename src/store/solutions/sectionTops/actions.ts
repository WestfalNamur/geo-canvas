import { SectionTop, GET_SECTION_TOPS, SET_SECTION_TOPS } from "./types";

export function getSectionTops() {
  return {
    type: GET_SECTION_TOPS,
  };
}

export function setSectionTops(newSectionTops: SectionTop[]) {
  return {
    type: SET_SECTION_TOPS,
    payload: newSectionTops,
  };
}

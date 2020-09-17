import {
  SectionTop,
  GET_SECTION_TOPS,
  GET_SECTION_TOPS_MULTI,
  SET_SECTION_TOPS,
} from "./types";

export function getSectionTops() {
  return {
    type: GET_SECTION_TOPS,
  };
}

export function getSectionTopsMulti() {
  return {
    type: GET_SECTION_TOPS_MULTI,
  };
}

export function setSectionTops(newSectionTops: SectionTop[]) {
  return {
    type: SET_SECTION_TOPS,
    payload: newSectionTops,
  };
}

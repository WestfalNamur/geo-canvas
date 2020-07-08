import {
  Section,
  GET_SECTION,
  GET_SECTION_FROM_SERVER,
  UPDATE_SECTION,
  UPDATE_SECTION_FAILED,
} from "./types";

export function getSection() {
  return {
    type: GET_SECTION,
  };
}

export function getSectionFromServer(section: Section) {
  return {
    type: GET_SECTION_FROM_SERVER,
    payload: section,
  };
}

export function updateSection(newSection: Section, oldSection: Section) {
  return {
    type: UPDATE_SECTION,
    payload: {
      newSection,
      oldSection,
    },
  };
}

export function updateSectionFailed(newSection: Section, oldSection: Section) {
  return {
    type: UPDATE_SECTION_FAILED,
    payload: {
      newSection,
      oldSection,
    },
  };
}

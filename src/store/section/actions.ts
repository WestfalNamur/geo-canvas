import { Section, UPDATE_SECTION } from "./types";

export function updateSection(newSection: Section) {
  return {
    type: UPDATE_SECTION,
    payload: newSection,
  };
}

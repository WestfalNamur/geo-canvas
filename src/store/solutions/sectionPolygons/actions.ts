import {
  SectionPolygon,
  GET_SECTION_POLYGONS,
  SET_SECTION_POLYGONS,
} from "./types";

export function getSectionPolygons() {
  return {
    type: GET_SECTION_POLYGONS,
  };
}

export function setSectionPolygons(newSectionPolygons: SectionPolygon[]) {
  return {
    type: SET_SECTION_POLYGONS,
    payload: newSectionPolygons,
  };
}

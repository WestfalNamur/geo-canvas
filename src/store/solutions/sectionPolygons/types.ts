export const GET_SECTION_POLYGONS = "GET_SECTION_POLYGONS";
export const SET_SECTION_POLYGONS = "SET_SECTION_POLYGONS";

export interface SectionPolygon {
  name: String;
  points: number[]; // [x0, y0, x1, y1, ..., xn, yn]
}

export interface SolutionsState {
  sectionPolygons: SectionPolygon[];
}
export interface GetSectionPolygonsActionType {
  type: typeof GET_SECTION_POLYGONS;
}

export interface SetSectionPolygonsActionType {
  type: typeof SET_SECTION_POLYGONS;
  payload: SectionPolygon[];
}

export type SolutionsActionTypes =
  | GetSectionPolygonsActionType
  | SetSectionPolygonsActionType;

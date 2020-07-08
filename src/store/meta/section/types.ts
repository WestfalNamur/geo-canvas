export const GET_SECTION = "GET_SECTION";
export const GET_SECTION_FROM_SERVER = "GET_SECTION_FROM_SERVER";
export const UPDATE_SECTION = "UPDATA_SECTION";
export const UPDATE_SECTION_FAILED = "UPDATE_SECTION_FAILED";

export interface Section {
  p1: [number, number]; // [x0, y0]
  p2: [number, number]; // [x1, y1]
  resolution: [number, number]; // [xres, yres]
}

export interface SectionState {
  section: Section;
}

export interface GetSectionActionType {
  type: typeof GET_SECTION;
}

export interface GetSectionFromServerActionType {
  type: typeof GET_SECTION_FROM_SERVER;
  payload: Section;
}

export interface UpdateSectionActionType {
  type: typeof UPDATE_SECTION;
  payload: {
    newSection: Section;
    oldSection: Section;
  };
}

export interface UpdateSectionFailedActionType {
  type: typeof UPDATE_SECTION_FAILED;
  payload: {
    newSection: Section;
    oldSection: Section;
  };
}

export type SectionActionTypes =
  | GetSectionActionType
  | GetSectionFromServerActionType
  | UpdateSectionActionType
  | UpdateSectionFailedActionType;

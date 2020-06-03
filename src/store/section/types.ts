export const UPDATE_SECTION = "UPDATA_SECTION";

export interface Section {
  p1: [number, number];
  p2: [number,number];
  resolution: [number, number];
}

export interface SectionState {
  section: Section;
}

export interface UpdateSectionStateActionType {
  type: typeof UPDATE_SECTION;
  payload: Section;
}

export type SectionActionTypes = UpdateSectionStateActionType;

export const GET_SECTION_TOPS = "GET_SECTION_TOPS";
export const SET_SECTION_TOPS = "SET_SECTION_TOPS";

export interface SectionTop {
  blockSurface: String;
  xyzValues: number[]
}

export interface SectionTopsState {
  sectionTops: SectionTop[];
}
export interface GetSectionTopsActionType {
  type: typeof GET_SECTION_TOPS;
}

export interface SetSectionTopsActionType {
  type: typeof SET_SECTION_TOPS;
  payload: SectionTop[];
}

export type SectionTopsActionTypes =
  | GetSectionTopsActionType
  | SetSectionTopsActionType;

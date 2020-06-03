import { ExtentState, ExtentActionTypes, UPDATE_EXTENT } from "./types";

const initialState: ExtentState = {
  extent: {
    xmin: 0,
    xmax: 1000,
    ymix: 0,
    ymax: 1000,
    zmix: 0,
    zmax: 1000,
  },
};

export function extentReducer(
  state = initialState,
  action: ExtentActionTypes
): ExtentState {
  switch (action.type) {
    case UPDATE_EXTENT:
      return {
        extent: action.payload,
      };
    default:
      return state;
  }
}

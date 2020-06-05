import {
  ExtentState,
  ExtentActionTypes,
  UPDATE_EXTENT,
} from "./types";

const initialState: ExtentState = {
  extent: {
    xmin: 0,
    xmax: 1000,
    ymin: 0,
    ymax: 1000,
    zmin: 0,
    zmax: 1000,
  },
};

export function extentReducer(
  state = initialState,
  action: ExtentActionTypes
): ExtentState {
  switch (action.type) {
    case UPDATE_EXTENT:
      const extent = state.extent;
      switch (action.payload.name) {
        case (action.payload.name = "xmin"):
          extent.xmin = action.payload.value;
          return {
            extent: extent,
          };
        case (action.payload.name = "xmax"):
          extent.xmax = action.payload.value;
          return {
            extent: extent,
          };
        case (action.payload.name = "ymin"):
          extent.ymin = action.payload.value;
          return {
            extent: extent,
          };
        case (action.payload.name = "ymax"):
          extent.ymax = action.payload.value;
          return {
            extent: extent,
          };
        case (action.payload.name = "zmin"):
          extent.zmin = action.payload.value;
          return {
            extent: extent,
          };
        case (action.payload.name = "zmax"):
          extent.zmax = action.payload.value;
          return {
            extent: extent,
          };
        default:
          return state;
      }
    default:
      return state;
  }
}

import {
  ExtentState,
  ExtentActionTypes,
  GET_EXTENT_FROM_SERVER,
  UPDATE_EXTENT,
  UPDATE_EXTENT_FAILED,
} from "./types";

const initialState: ExtentState = {
  extent: {
    x_min: 0,
    x_max: 1000,
    y_min: 0,
    y_max: 1000,
    z_min: 0,
    z_max: 1000,
  },
};

export function extentReducer(
  state = initialState,
  action: ExtentActionTypes
): ExtentState {
  switch (action.type) {
    case GET_EXTENT_FROM_SERVER:
      return {
        extent: action.payload,
      };
    case UPDATE_EXTENT:
      return {
        extent: action.payload.newExtent,
      };
    case UPDATE_EXTENT_FAILED:
      return {
        extent: action.payload.oldExtent,
      };
    default:
      return state;
  }
}

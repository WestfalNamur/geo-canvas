import {
  OrientationsState,
  OrientationActionTypes,
  GET_ORIENTATIONS,
  PUT_ORIENTATION,
  DELETE_ORIENTATION,
} from "./types";

const initialState: OrientationsState = {
  orientaions: [],
};

export function orientationsReducer(
  state = initialState,
  action: OrientationActionTypes
): OrientationsState {
  switch (action.type) {
    case GET_ORIENTATIONS:
      return {
        orientaions: action.payload,
      };
    case PUT_ORIENTATION:
      const filteredOrientations = state.orientaions.filter(
        (orientation) => orientation.id !== action.payload.id
      );
      return {
        orientaions: [...filteredOrientations, action.payload],
      };
    case DELETE_ORIENTATION:
      return {
        orientaions: state.orientaions.filter(
          (orientation) => orientation.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

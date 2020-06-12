import {
  OrientationsState,
  OrientationActionTypes,
  GET_ORIENTATIONS,
  PUT_ORIENTATION,
  DELETE_ORIENTATION,
} from "./types";

const initialState: OrientationsState = {
  orientations: [],
};

export function orientationsReducer(
  state = initialState,
  action: OrientationActionTypes
): OrientationsState {
  switch (action.type) {
    case GET_ORIENTATIONS:
      return {
        orientations: action.payload,
      };
    case PUT_ORIENTATION:
      const filteredOrientations = state.orientations.filter(
        (orientation) => orientation.id !== action.payload.id
      );
      return {
        orientations: [...filteredOrientations, action.payload],
      };
    case DELETE_ORIENTATION:
      return {
        orientations: state.orientations.filter(
          (orientation) => orientation.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

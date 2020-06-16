import {
  OrientationsState,
  OrientationActionTypes,
  ADD_ORIENTATIONS_FROM_SERVER,
  ADD_ORIENTATION,
  ADD_ORIENTATION_FAILED,
  PUT_ORIENTATION,
  PUT_ORIENTATION_FAILED,
  DELETE_ORIENTATION,
  DELETE_ORIENTATION_FAILED,
} from "./types";

const initialState: OrientationsState = {
  orientations: [],
};

export function orientationsReducer(
  state = initialState,
  action: OrientationActionTypes
): OrientationsState {
  switch (action.type) {
    case ADD_ORIENTATIONS_FROM_SERVER:
      return {
        orientations: action.payload,
      };
    case ADD_ORIENTATION:
      return {
        orientations: [...state.orientations, action.payload],
      };
    case ADD_ORIENTATION_FAILED:
      return {
        orientations: state.orientations.filter(
          (orientation) => orientation.id !== action.payload.id
        ),
      };
    case PUT_ORIENTATION:
      const filteredOrientationsPut = state.orientations.filter(
        (orientation) => orientation.id !== action.payload.oldOrientation.id
      );
      return {
        orientations: [
          ...filteredOrientationsPut,
          action.payload.newOrientation,
        ],
      };
    case PUT_ORIENTATION_FAILED:
      const filteredOrientationsPutFailed = state.orientations.filter(
        (orientation) => orientation.id !== action.payload.newOrientation.id
      );
      return {
        orientations: [
          ...filteredOrientationsPutFailed,
          action.payload.oldOrientation,
        ],
      };
    case DELETE_ORIENTATION:
      return {
        orientations: state.orientations.filter(
          (orientation) => orientation.id !== action.payload.id
        ),
      };
    case DELETE_ORIENTATION_FAILED:
      return {
        orientations: [...state.orientations, action.payload],
      };
    default:
      return state;
  }
}

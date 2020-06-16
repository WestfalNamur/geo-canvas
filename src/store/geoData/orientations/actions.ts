import {
  Orientation,
  GET_ORIENTATIONS,
  ADD_ORIENTATIONS_FROM_SERVER,
  ADD_ORIENTATION,
  ADD_ORIENTATION_FAILED,
  PUT_ORIENTATION,
  PUT_ORIENTATION_FAILED,
  DELETE_ORIENTATION,
  DELETE_ORIENTATION_FAILED,
} from "./types";

export function getOrientations() {
  return {
    type: GET_ORIENTATIONS,
  };
}

export function addOrientationsFromServer(newOrientations: Orientation[]) {
  return {
    type: ADD_ORIENTATIONS_FROM_SERVER,
    payload: newOrientations,
  };
}

export function addOrientation(orientation: Orientation) {
  return {
    type: ADD_ORIENTATION,
    payload: orientation,
  };
}

export function addOrientationFailed(orientation: Orientation) {
  return {
    type: ADD_ORIENTATION_FAILED,
    payload: orientation,
  };
}

export function putOrientation(
  newOrientation: Orientation,
  oldOrientation: Orientation
) {
  return {
    type: PUT_ORIENTATION,
    payload: {
      newOrientation,
      oldOrientation,
    },
  };
}

export function putOrientationFailed(
  newOrientation: Orientation,
  oldOrientation: Orientation
) {
  return {
    type: PUT_ORIENTATION_FAILED,
    payload: {
      newOrientation,
      oldOrientation,
    },
  };
}

export function deleteOrientation(orientation: Orientation) {
  return {
    type: DELETE_ORIENTATION,
    payload: orientation,
  };
}

export function deleteOrientationFailed(orientation: Orientation) {
  return {
    type: DELETE_ORIENTATION_FAILED,
    payload: orientation,
  };
}

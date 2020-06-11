import {
  Orientation,
  GET_ORIENTATIONS,
  PUT_ORIENTATION,
  DELETE_ORIENTATION,
} from "./types";

export function getOrientations(newOrientations: Orientation[]) {
  return {
    type: GET_ORIENTATIONS,
    payload: newOrientations,
  };
}

export function putOrientation(orientation: Orientation) {
  return {
    type: PUT_ORIENTATION,
    payload: orientation,
  };
}

export function deleteOrientation(orientation: Orientation) {
  return {
    type: DELETE_ORIENTATION,
    payload: orientation,
  };
}

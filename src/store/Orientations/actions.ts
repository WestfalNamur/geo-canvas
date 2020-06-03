import {
  Orientaion,
  GET_ORIENTATIONS,
  PUT_ORIENTATION,
  DELETE_ORIENTATION,
} from "./types";

export function getOrientations(newOrientations: Orientaion[]) {
  return {
    type: GET_ORIENTATIONS,
    payload: newOrientations,
  };
}

export function putOrientation(orientation: Orientaion) {
  return {
    type: PUT_ORIENTATION,
    payload: orientation,
  };
}

export function deleteOrientation(orientation: Orientaion) {
  return {
    type: DELETE_ORIENTATION,
    payload: orientation,
  };
}

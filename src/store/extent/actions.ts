import { ExtentValue, UPDATE_EXTENT } from "./types";

export function updateExtent(newExtentValue: ExtentValue) {
  return {
    type: UPDATE_EXTENT,
    payload: newExtentValue,
  };
}

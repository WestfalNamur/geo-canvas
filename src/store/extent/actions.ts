import { Extent, UPDATE_EXTENT } from "./types";

export function updateExtent(newExtent: Extent) {
  return {
    type: UPDATE_EXTENT,
    payload: newExtent,
  };
}

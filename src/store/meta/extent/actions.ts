import {
  Extent,
  GET_EXTENT,
  GET_EXTENT_FROM_SERVER,
  UPDATE_EXTENT,
  UPDATE_EXTENT_FAILED,
} from "./types";

export function getExtent() {
  return {
    type: GET_EXTENT,
  };
}

export function getExtentFromServer(extent: Extent) {
  return {
    type: GET_EXTENT_FROM_SERVER,
    payload: extent,
  };
}

export function updateExtent(newExtent: Extent, oldExtent: Extent) {
  return {
    type: UPDATE_EXTENT,
    payload: {
      newExtent,
      oldExtent,
    },
  };
}

export function updateExtentFailed(newExtent: Extent, oldExtent: Extent) {
  return {
    type: UPDATE_EXTENT_FAILED,
    payload: {
      newExtent,
      oldExtent,
    },
  };
}

import { CanvasSize, UPDATE_CANVAS_SIZE } from "./types";

export function updateCanvasSize(newCanvasSize: CanvasSize) {
  return {
    type: UPDATE_CANVAS_SIZE,
    payload: newCanvasSize,
  };
}

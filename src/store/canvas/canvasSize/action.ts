import { CanvasSize, UPDATE_CANVAS_SIZE } from "./types";

export function updateCanvasSize(canvasSize: CanvasSize) {
  return {
    type: UPDATE_CANVAS_SIZE,
    payload: canvasSize,
  };
}

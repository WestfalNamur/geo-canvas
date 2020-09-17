import { CanvasSize, UPDATE_CANVAS_SIZE, LOAD_IMG } from "./types";

export function updateCanvasSize(canvasSize: CanvasSize) {
  return {
    type: UPDATE_CANVAS_SIZE,
    payload: canvasSize,
  };
}

export function loadImg(img: any) {
  return {
    type: LOAD_IMG,
    payload: img,
  };
}

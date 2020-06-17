export const UPDATE_CANVAS_SIZE = "UPDATE_CANVAS_SIZE";

export interface CanvasSize {
  width: number;
  height: number;
}

export interface CanvasSizeState {
  canvasSize: CanvasSize;
}

export interface UpdateCanvasSizeAction {
  type: typeof UPDATE_CANVAS_SIZE;
  payload: CanvasSize;
}

export type CanvasSizeActionTypes = UpdateCanvasSizeAction;

export const UPDATE_CANVAS_SIZE = "UPDATE_CANVAS_SIZE";

export interface CanvasSize {
  width: number;
  height: number;
}

export interface CanvasState {
  size: CanvasSize;
}

export interface CanvasSizeActionType {
  type: typeof UPDATE_CANVAS_SIZE;
  payload: CanvasSize;
}

export type CanvasActionTypes = CanvasSizeActionType;

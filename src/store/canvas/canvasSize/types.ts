export const UPDATE_CANVAS_SIZE = "UPDATE_CANVAS_SIZE";
export const LOAD_IMG = "LOAD_IMG";

export interface CanvasSize {
  width: number;
  height: number;
}

export interface CanvasSizeState {
  canvasSize: CanvasSize;
  img: any;
}

export interface UpdateCanvasSizeAction {
  type: typeof UPDATE_CANVAS_SIZE;
  payload: CanvasSize;
}

export interface LoadImgActionType {
  type: typeof LOAD_IMG;
  payload: any;
}

export type CanvasSizeActionTypes = UpdateCanvasSizeAction | LoadImgActionType;

import {
  CanvasSizeState,
  UPDATE_CANVAS_SIZE,
  CanvasSizeActionTypes,
} from "./types";

const initialState: CanvasSizeState = {
  canvasSize: {
    height: 100,
    width: 120,
  },
};

export function canvasSizeReducer(
  state = initialState,
  action: CanvasSizeActionTypes
): CanvasSizeState {
  switch (action.type) {
    case UPDATE_CANVAS_SIZE:
      return {
        canvasSize: action.payload,
      };
    default:
      return state;
  }
}

import { CanvasState, CanvasActionTypes, UPDATE_CANVAS_SIZE } from "./types";

const initialState: CanvasState = {
  size: {
    width: 120,
    height: 100,
  },
};

export function canvasReducer(
  state = initialState,
  action: CanvasActionTypes
): CanvasState {
  switch (action.type) {
    case UPDATE_CANVAS_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
}

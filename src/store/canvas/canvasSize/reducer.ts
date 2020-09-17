import {
  CanvasSizeState,
  UPDATE_CANVAS_SIZE,
  LOAD_IMG,
  CanvasSizeActionTypes,
} from "./types";

const initialState: CanvasSizeState = {
  canvasSize: {
    height: 100,
    width: 120,
  },
  img: false,
};

export function canvasSizeReducer(
  state = initialState,
  action: CanvasSizeActionTypes
): CanvasSizeState {
  switch (action.type) {
    case UPDATE_CANVAS_SIZE:
      return {
        ...state,
        canvasSize: action.payload,
      };
    case LOAD_IMG:
      return {
        ...state,
        img: action.payload
      }
    default:
      return state;
  }
}

import {
  SelectionsState,
  SelectionsActionTypes,
  UPDATE_SELECTED_SURFACE_POINT,
  UPDATE_SELECTED_SURFACE,
  UPDATE_SELECTED_ORIENTAION,
} from "./types";

const initialState: SelectionsState = {
  selectedSurfacePoint: {
    id: null,
  },
  selectedSurface: {
    name: null,
  },
  selecledOrientaion: {
    id: null,
  },
};

export function selectionsReducers(
  state = initialState,
  action: SelectionsActionTypes
): SelectionsState {
  switch (action.type) {
    case UPDATE_SELECTED_SURFACE_POINT:
      return {
        ...state,
        selectedSurfacePoint: action.payload,
      };
    case UPDATE_SELECTED_SURFACE:
      return {
        ...state,
        selectedSurface: action.payload,
      };
    case UPDATE_SELECTED_ORIENTAION:
      return {
        ...state,
        selecledOrientaion: action.payload,
      };
    default:
      return state;
  }
}

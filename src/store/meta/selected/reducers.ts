import {
  SelectionsState,
  SelectionsActionTypes,
  UPDATE_SELECTED_SURFACE_POINT,
  UPDATE_SELECTED_SURFACE,
  UPDATE_SELECTED_ORIENTAION,
  UPDATE_SELECTED_DRAWING_OPTION,
  TOGGLE_SHOW_IE,
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
  selectedDrawingOption: {
    option: "None",
  },
  showIE: {
    showIe: false,
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
    case UPDATE_SELECTED_DRAWING_OPTION:
      return {
        ...state,
        selectedDrawingOption: action.payload,
      };
    case TOGGLE_SHOW_IE:
      return {
        ...state,
        showIE: { showIe: !state.showIE.showIe },
      };
    default:
      return state;
  }
}

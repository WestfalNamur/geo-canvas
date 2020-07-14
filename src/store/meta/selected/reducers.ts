import {
  SelectionsState,
  SelectionsActionTypes,
  UPDATE_SELECTED_SURFACE_POINT,
} from "./types";

const initialState: SelectionsState = {
  selectedSurfacePoint: {
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
    default:
      return state;
  }
}

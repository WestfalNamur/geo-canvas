import {
  SurfacePointsState,
  SurfacePointActionTypes,
  GET_SURFACEPOINTS,
  PUT_SURFACEPOINT,
  DELETE_SURFACEPOINT,
} from "./types";

const initialState: SurfacePointsState = {
  surfacePoints: [],
};

export function surfacePointsReducer(
  state = initialState,
  action: SurfacePointActionTypes
): SurfacePointsState {
  switch (action.type) {
    case GET_SURFACEPOINTS:
      return {
        surfacePoints: action.payload,
      };
    case PUT_SURFACEPOINT:
      const filteredSurfacePoints = state.surfacePoints.filter(
        (surfacePoint) => surfacePoint.id !== action.payload.id
      );
      return {
        surfacePoints: [...filteredSurfacePoints, action.payload],
      };
    case DELETE_SURFACEPOINT:
      return {
        surfacePoints: state.surfacePoints.filter(
          (surfacePoint) => surfacePoint.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

import {
  SurfacePointsState,
  SurfacePointActionTypes,
  ADD_SURFACEPOINTS_FROM_SERVER,
  ADD_SURFACEPOINT,
  ADD_SURFACEPOINT_FAILED,
  PUT_SURFACEPOINT,
  PUT_SURFACEPOINT_FAILED,
  DELETE_SURFACEPOINT,
  DELETE_SURFACEPOINT_FAILED,
} from "./types";

const initialState: SurfacePointsState = {
  surfacePoints: [],
};

export function surfacePointsReducer(
  state = initialState,
  action: SurfacePointActionTypes
): SurfacePointsState {
  switch (action.type) {
    case ADD_SURFACEPOINTS_FROM_SERVER:
      return {
        surfacePoints: action.payload,
      };
    case ADD_SURFACEPOINT:
      return {
        surfacePoints: [...state.surfacePoints, action.payload],
      };
    case ADD_SURFACEPOINT_FAILED:
      return {
        surfacePoints: state.surfacePoints.filter(
          (surfacePoint) => surfacePoint.id !== action.payload.id
        ),
      };
    case PUT_SURFACEPOINT:
      const filteredSurfacePointsPut = state.surfacePoints.filter(
        (surfacePoint) => surfacePoint.id !== action.payload.oldSurfacePoint.id
      );
      return {
        surfacePoints: [
          ...filteredSurfacePointsPut,
          action.payload.newSurfacePoint,
        ],
      };
    case PUT_SURFACEPOINT_FAILED:
      const filteredSurfacePointsPutFailed = state.surfacePoints.filter(
        (surfacePoint) => surfacePoint.id !== action.payload.newSurfacePoint.id
      );
      return {
        surfacePoints: [
          ...filteredSurfacePointsPutFailed,
          action.payload.oldSurfacePoint,
        ],
      };
    case DELETE_SURFACEPOINT:
      return {
        surfacePoints: state.surfacePoints.filter(
          (surfacePoint) => surfacePoint.id !== action.payload.id
        ),
      };
    case DELETE_SURFACEPOINT_FAILED:
      return {
        surfacePoints: [...state.surfacePoints, action.payload],
      };
    default:
      return state;
  }
}

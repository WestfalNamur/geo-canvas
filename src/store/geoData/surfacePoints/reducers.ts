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
  ADD_SURFACEPOINT_TO_LINE,
  CLEAR_LINE,
  PARA_LINE,
} from "./types";

const initialState: SurfacePointsState = {
  surfacePoints: [],
  linePoints: [],
};

export function surfacePointsReducer(
  state = initialState,
  action: SurfacePointActionTypes
): SurfacePointsState {
  switch (action.type) {
    case ADD_SURFACEPOINTS_FROM_SERVER:
      return {
        ...state,
        surfacePoints: action.payload,
      };
    case ADD_SURFACEPOINT:
      return {
        ...state,
        surfacePoints: [...state.surfacePoints, action.payload],
      };
    case ADD_SURFACEPOINT_FAILED:
      return {
        ...state,
        surfacePoints: state.surfacePoints.filter(
          (surfacePoint) => surfacePoint.id !== action.payload.id
        ),
      };
    case PUT_SURFACEPOINT:
      const filteredSurfacePointsPut = state.surfacePoints.filter(
        (surfacePoint) => surfacePoint.id !== action.payload.oldSurfacePoint.id
      );
      return {
        ...state,
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
        ...state,
        surfacePoints: [
          ...filteredSurfacePointsPutFailed,
          action.payload.oldSurfacePoint,
        ],
      };
    case DELETE_SURFACEPOINT:
      return {
        ...state,
        surfacePoints: state.surfacePoints.filter(
          (surfacePoint) => surfacePoint.id !== action.payload.id
        ),
      };
    case DELETE_SURFACEPOINT_FAILED:
      return {
        ...state,
        surfacePoints: [...state.surfacePoints, action.payload],
      };
    case ADD_SURFACEPOINT_TO_LINE:
      return {
        ...state,
        linePoints: [...state.linePoints, action.payload],
      };
    case CLEAR_LINE:
      return {
        ...state,
        linePoints: [],
      };
    case PARA_LINE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

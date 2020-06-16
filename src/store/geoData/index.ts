import { combineReducers } from "redux";
import { seriesReducer } from "./series/reducers";
import { surfacesReducer } from "./surfaces/reducers";
import { surfacePointsReducer } from "./surfacePoints/reducers";
import { orientationsReducer } from "./orientations/reducer";

export default combineReducers({
  series: seriesReducer,
  surfaces: surfacesReducer,
  surfacePoints: surfacePointsReducer,
  orientations: orientationsReducer,
});

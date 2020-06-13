import { combineReducers } from "redux";
import { seriesReducer } from "./series/reducers";

export default combineReducers({
  series: seriesReducer,
});

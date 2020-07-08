import { combineReducers } from "redux";
import { canvasSizeReducer } from "./canvasSize/reducer";

export default combineReducers({
  canvasSize: canvasSizeReducer,
});

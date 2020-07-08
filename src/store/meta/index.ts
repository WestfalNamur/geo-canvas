import { combineReducers } from "redux";
import { extentReducer } from "./extent/reducers";
import { sectionReducer } from "./section/reducers";

export default combineReducers({
  extent: extentReducer,
  section: sectionReducer,
});

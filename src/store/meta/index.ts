import { combineReducers } from "redux";
import { extentReducer } from "./extent/reducers";
import { sectionReducer } from "./section/reducers";
import { selectionsReducers } from "./selected/reducers";

export default combineReducers({
  extent: extentReducer,
  section: sectionReducer,
  selections: selectionsReducers,
});

import { combineReducers } from "redux";
import { solutionsReducers } from "./sectionPolygons/reducer";

export default combineReducers({
  sectionPolygons: solutionsReducers,
});

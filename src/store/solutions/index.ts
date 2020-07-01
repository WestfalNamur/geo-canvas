import { combineReducers } from "redux";
import { solutionsReducers } from "./sectionPolygons/reducer";
import { sectionTopsReducers } from "./sectionTops/reducer";

export default combineReducers({
  sectionPolygons: solutionsReducers,
  sectionTops: sectionTopsReducers,
});

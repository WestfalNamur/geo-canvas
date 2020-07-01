import { combineReducers } from "redux";
import { sectionTopsReducers } from "./sectionTops/reducer";

export default combineReducers({
  sectionTops: sectionTopsReducers,
});

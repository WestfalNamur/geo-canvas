import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";

// reducers
import { canvasReducer } from "./canvas/reducers";

import { extentReducer } from "./extent/reducers";
import { sectionReducer } from "./section/reducers";
import { seriesReducer } from "./series/reducers";
import { surfacesReducer } from "./surfaces/reducers";

// combine reducers
const rootReducer = combineReducers({
  canvas: canvasReducer,
  extent: extentReducer,
  section: sectionReducer,
  series: seriesReducer,
  surfaces: surfacesReducer,
});

// export type of RootState
export type RootState = ReturnType<typeof rootReducer>;

// configure and create store
export const store = createStore(rootReducer, applyMiddleware(logger));

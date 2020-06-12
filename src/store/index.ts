import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

// reducers
import { canvasReducer } from "./canvas/reducers";

import { extentReducer } from "./extent/reducers";
import { sectionReducer } from "./section/reducers";
import { seriesReducer } from "./series/reducers";
import { surfacesReducer } from "./surfaces/reducers";
import { surfacePointsReducer } from "./SurfacePoints/reducers";
import { orientationsReducer } from "./Orientations/reducer";

// middleware
import rootSaga from "../sagas";

// combine reducers
const rootReducer = combineReducers({
  canvas: canvasReducer,
  extent: extentReducer,
  section: sectionReducer,
  series: seriesReducer,
  surfaces: surfacesReducer,
  surfacePoints: surfacePointsReducer,
  orientations: orientationsReducer,
});

// create middelwares
const sagaMiddleware = createSagaMiddleware();

// export type of RootState
export type RootState = ReturnType<typeof rootReducer>;

// configure and create store
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

// start saga
sagaMiddleware.run(rootSaga);

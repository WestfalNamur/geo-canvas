import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

// reducers
// metaData
import { extentReducer } from "./extent/reducers";
import { sectionReducer } from "./section/reducers";
// geoData
import { seriesReducer } from "./geoData/series/reducers";
import { surfacesReducer } from "./geoData/surfaces/reducers";
import { surfacePointsReducer } from "./geoData/SurfacePoints/reducers";
import { orientationsReducer } from "./geoData/Orientations/reducer";
// canvas
import { canvasReducer } from "./canvas/reducers";

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

import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

// reducers
// metaData
import meta from "./meta";
// geoData
import geoData from "./geoData";
// canvas
import { canvasReducer } from "./canvas/reducers";

// middleware
import rootSaga from "../sagas";

// combine reducers
const rootReducer = combineReducers({
  geoData,
  meta,
  canvas: canvasReducer,
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

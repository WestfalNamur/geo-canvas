import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";

// combine reducers
const rootReducer = combineReducers({});

// export type of RootState
export type RootState = ReturnType<typeof rootReducer>;

// configure and create store
export const store = createStore(rootReducer, applyMiddleware(logger));

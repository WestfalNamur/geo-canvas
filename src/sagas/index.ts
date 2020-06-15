import { all } from "redux-saga/effects";
import {
  watchGetSeries,
  watchAddSerie,
  watchPutSerie,
  watchDeleteSerie,
} from "./Series";
import {
  watchGetSurfaces,
  watchAddSurface,
  watchPutSurface,
  watchDeleteSurface,
} from "./Surfaces";
import {
  watchGetSurfacPoints,
  watchAddSurfacePoint,
  watchPutSurfacePoint,
  watchDeleteSurfacePoint,
} from "./SurfacePoints";
import {
  watchGetOrientation,
  watchAddOrientation,
  watchPutOrientation,
  watchDeleteOrientation,
} from "./Orientations";

export default function* rootSaga() {
  yield all([
    watchGetSeries(),
    watchAddSerie(),
    watchPutSerie(),
    watchDeleteSerie(),

    watchGetSurfaces(),
    watchAddSurface(),
    watchPutSurface(),
    watchDeleteSurface(),

    watchGetSurfacPoints(),
    watchAddSurfacePoint(),
    watchPutSurfacePoint(),
    watchDeleteSurfacePoint(),

    watchGetOrientation(),
    watchAddOrientation(),
    watchPutOrientation(),
    watchDeleteOrientation(),
  ]);
}

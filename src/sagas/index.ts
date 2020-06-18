import { all } from "redux-saga/effects";
import {
  watchGetSeries,
  watchAddSerie,
  watchPutSerie,
  watchDeleteSerie,
} from "./geoData/Series";
import {
  watchGetSurfaces,
  watchAddSurface,
  watchPutSurface,
  watchDeleteSurface,
} from "./geoData/Surfaces";
import {
  watchGetSurfacPoints,
  watchAddSurfacePoint,
  watchPutSurfacePoint,
  watchDeleteSurfacePoint,
} from "./geoData/SurfacePoints";
import {
  watchGetOrientation,
  watchAddOrientation,
  watchPutOrientation,
  watchDeleteOrientation,
} from "./geoData/Orientations";
import { watchGetExtent, watchPutExtent } from "./meta/extent";
import { watchGetSection, watchPutSection } from "./meta/section";
import { watchGetSectionPolygonsSaga } from "./solutions/SectionPolygons";

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

    watchGetExtent(),
    watchPutExtent(),

    watchGetSection(),
    watchPutSection(),

    watchGetSectionPolygonsSaga(),
  ]);
}

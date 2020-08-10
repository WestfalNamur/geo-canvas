import React, { useEffect } from "react";
import "./utils/App.css";
import Routes from "./Routes";
import AppBarTop from "./components/AppBarTop";

import { useDispatch } from "react-redux";
import { getSeries } from "./store/geoData/series/actions";
import { getSurfaces } from "./store/geoData/surfaces/actions";
import { getSurfacePoints } from "./store/geoData/surfacePoints/actions";
import { getOrientations } from "./store/geoData/orientations/actions";
import { getExtent } from "./store/meta/extent/actions";
import { getSection } from "./store/meta/section/actions";
// import { getSectionPolygons } from "./store/solutions/sectionPolygons/actions";
import { getSectionTops } from "./store/solutions/sectionTops/actions";
import { getEntropyMap } from "./api/solutions/entropyMap"

export default function App() {
  const dispatch = useDispatch();
  // fetch server date  // TODO: make concurrent
  useEffect(() => {
    dispatch(getSeries());
    dispatch(getSurfaces());
    dispatch(getSurfacePoints());
    dispatch(getOrientations());
    dispatch(getExtent());
    dispatch(getSection());
    //dispatch(getSectionPolygons());
    dispatch(getSectionTops());
    // getEntropyMap()
  });

  return (
    <div className="App">
      <AppBarTop />
      <Routes />
    </div>
  );
}

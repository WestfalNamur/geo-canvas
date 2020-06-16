import React, { useEffect } from "react";
import "./utils/App.css";
import Routes from "./Routes";
import AppBarTop from "./components/AppBarTop";

import { useDispatch } from "react-redux";
import { getSeries } from "./store/geoData/series/actions";
import { getSurfaces } from "./store/geoData/surfaces/actions";
import { getSurfacePoints } from "./store/geoData/surfacePoints/actions";
import { getOrientations } from "./store/geoData/orientations/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSeries());
    dispatch(getSurfaces());
    dispatch(getSurfacePoints());
    dispatch(getOrientations());
  });
  return (
    <div className="App">
      <AppBarTop />
      <Routes />
    </div>
  );
}

export default App;

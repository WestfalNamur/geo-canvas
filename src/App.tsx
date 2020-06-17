import React, { useEffect, useLayoutEffect } from "react";
import "./utils/App.css";
import Routes from "./Routes";
import AppBarTop from "./components/AppBarTop";

import { useDispatch } from "react-redux";
import { getSeries } from "./store/geoData/series/actions";
import { getSurfaces } from "./store/geoData/surfaces/actions";
import { getSurfacePoints } from "./store/geoData/surfacePoints/actions";
import { getOrientations } from "./store/geoData/orientations/actions";
import { getExtent } from "./store/meta/extent/actions";

import { APP_BAR_HEIGHT } from "./utils/CONSTANTS";
import { updateCanvasSize } from "./store/canvas/canvasSize/action";

export default function App() {
  const dispatch = useDispatch();
  // update canvas size as it is a function of the windo size
  useLayoutEffect(() => {
    function updateCanvasSizeComp() {
      const { innerWidth, innerHeight } = window;
      const width = innerWidth;
      const height = innerHeight - APP_BAR_HEIGHT;
      dispatch(updateCanvasSize({ width, height }));
    }
    window.addEventListener("resize", updateCanvasSizeComp);
    updateCanvasSizeComp();
    return () => window.removeEventListener("resize", updateCanvasSizeComp);
  }, []);
  // TODO: make concurrent
  useEffect(() => {
    dispatch(getSeries());
    dispatch(getSurfaces());
    dispatch(getSurfacePoints());
    dispatch(getOrientations());
    dispatch(getExtent());
  });

  return (
    <div className="App">
      <AppBarTop />
      <Routes />
    </div>
  );
}

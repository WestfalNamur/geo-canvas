import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Canvas from "./components/canvas/Canvas";
import GeoData from "./components/geoData/GeoData";
// import DropZone from "./components/DropZone";

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/canvas" component={Canvas} />
    <Route exact path="/geoData" component={GeoData} />
    {/*<Route exact path="/dropzone" component={DropZone} />*/}
  </Switch>
);

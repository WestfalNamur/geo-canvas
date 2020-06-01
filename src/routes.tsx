import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Main from "./components/main/Main";
import Canvas from "./components/canvas/Canvas";
import GeoData from "./components/geoData/GeoData";

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/canvas" component={Canvas} />
      <Route exact path="/geoData" component={GeoData} />
    </Switch>
  </HashRouter>
);

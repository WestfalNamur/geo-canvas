import React, { useEffect } from "react";
import ExtentForm from "./ExtentForm";
import SeriesTable from "./SeriesTable";
import SurfacesTable from "./SurfacesTable";
import SurfacePointsTable from "./SurfacePointsTable";
import OrientationsTable from "./OrientationsTable";
import { useDispatch } from "react-redux";

import { getSeries } from "../../store/geoData/series/actions";
import { getSurfaces } from "../../store/geoData/surfaces/actions";
import { getSurfacePoints } from "../../store/geoData/surfacePoints/actions";
import { getOrientations } from "../../store/geoData/orientations/actions";

export default function GeoData() {
  // fetch data from server
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSeries());
    dispatch(getSurfaces());
    dispatch(getSurfacePoints());
    dispatch(getOrientations());
  });
  return (
    <div className="GeoData">
      <SeriesTable />
      <SurfacesTable />
      <SurfacePointsTable />
      <OrientationsTable />
    </div>
  );
}

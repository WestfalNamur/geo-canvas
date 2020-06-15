import React, { useEffect } from "react";
import ExtentForm from "./ExtentForm";
import SeriesTable from "./SeriesTable";
import SurfacesTable from "./SurfacesTable";
import SurfacePointsTable from "./SurfacePointsTable";
import OrientationsTable from "./OrientationsTable";
import { useDispatch } from "react-redux";
import { getSeries } from "../../store/geoData/series/actions";

export default function GeoData() {
  // fetch data from server
  const dispatch = useDispatch();
  useEffect(() => {
    // replace with function to get all data
    dispatch(getSeries());
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

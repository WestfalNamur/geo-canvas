import React from "react";
import ExtentForm from "./ExtentForm";
import SeriesTable from "./SeriesTable";
import SurfacesTable from "./SurfacesTable";
import SurfacePointsTable from "./SurfacePointsTable";

export default function GeoData() {
  return (
    <div className="GeoData">
      <SeriesTable />
      <SurfacesTable />
      <SurfacePointsTable />
    </div>
  );
}

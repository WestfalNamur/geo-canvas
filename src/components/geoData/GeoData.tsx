import React from "react";
import ExtentForm from "./ExtentForm";
import SeriesTable from "./SeriesTable";
import SurfacesTable from "./SurfacesTable";
import SurfacePointsTable from "./SurfacePointsTable";
import OrientationsTable from "./OrientationsTable";

export default function GeoData() {
  return (
    <div className="GeoData">
      <ExtentForm />
      <SeriesTable />
      <SurfacesTable />
      <SurfacePointsTable />
      <OrientationsTable />
    </div>
  );
}

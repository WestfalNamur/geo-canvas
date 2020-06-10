import React from "react";
import ExtentForm from "./ExtentForm";
import SeriesTable from "./SeriesTable";
import SurfacesTable from "./SurfacesTable";

export default function GeoData() {
  return (
    <div className="GeoData">
      <ExtentForm />
      <SeriesTable />
      <SurfacesTable />
    </div>
  );
}

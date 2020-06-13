import React from "react";
import MaterialTable, { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  putSurface,
  deleteSurface,
} from "../../store/geoData/surfaces/actions";
import { Surface } from "../../store/geoData/surfaces/types";

interface Lookup {
  [key: string]: string;
}

export default function SurfacesTable() {
  // hooks
  const surfaceState = (state: RootState) => state.surfaces.surfaces;
  const surfacesData = useSelector(surfaceState);
  const seriesState = (state: RootState) => state.geoData.series.series;
  const seriesData = useSelector(seriesState);
  const dispatch = useDispatch();
  // Series lookup options // lookup requires an object-type not an array;
  let lookup: Lookup = {};
  seriesData.forEach((serie) => {
    lookup = { ...lookup, ...{ [serie.name]: serie.name } };
  });
  const columns: Array<Column<Surface>> = [
    { title: "Name", field: "name" },
    { title: "Series", field: "serie", lookup },
  ];

  return (
    <MaterialTable
      title="Surfaces"
      columns={columns}
      data={surfacesData}
      editable={{
        onRowAdd: (newData: Surface) =>
          new Promise((resolve) => {
            setTimeout(() => {
              dispatch(putSurface(newData));
              resolve();
            }, 100);
          }),
        onRowUpdate: (newData: Surface) =>
          new Promise((resolve) => {
            setTimeout(() => {
              dispatch(putSurface(newData));
              resolve();
            }, 100);
          }),
        onRowDelete: (newData: Surface) =>
          new Promise((resolve) => {
            setTimeout(() => {
              dispatch(deleteSurface(newData));
              resolve();
            }, 100);
          }),
      }}
    />
  );
}

import React from "react";
import MaterialTable, { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  putSurfacePoint,
  deleteSurfacePoint,
} from "../../store/geoData/SurfacePoints/actions";
import { SurfacePoint } from "../../store/geoData/SurfacePoints/types";

interface Lookup {
  [key: string]: string;
}

export default function SurfacePointsTable() {
  // connect to store
  const surfacePointsData = useSelector(
    (state: RootState) => state.surfacePoints.surfacePoints
  );
  const surfacesData = useSelector(
    (state: RootState) => state.surfaces.surfaces
  );
  const dispatch = useDispatch();
  // get lookup options for possible surfaces
  let lookup: Lookup = {};
  surfacesData.forEach((surface) => {
    lookup = { ...lookup, ...{ [surface.name]: surface.name } };
  });
  const columns: Array<Column<SurfacePoint>> = [
    { title: "x", field: "x", type: "numeric" },
    { title: "y", field: "y", type: "numeric" },
    { title: "z", field: "z", type: "numeric" },
    { title: "surface", field: "surface", lookup },
    { title: "probdist", field: "probdist", lookup: { 0: "normal" } },
    { title: "param1", field: "param1", type: "numeric" },
    { title: "param2", field: "param2", type: "numeric" },
    { title: "active", field: "active", type: "boolean" },
  ];
  // helper functions // convert input String types to Number
  const reshapeData = (newData: SurfacePoint) => {
    const reshapedData: SurfacePoint = {
      id: `${newData.x}${newData.y}${newData.z}`,
      x: Number(newData.x),
      y: Number(newData.y),
      z: Number(newData.z),
      surface: newData.surface,
      probdist: newData.probdist,
      param1: Number(newData.param1),
      param2: Number(newData.param2),
      active: newData.active,
    };
    return reshapedData;
  };
  return (
    <MaterialTable
      title="Series"
      columns={columns}
      data={surfacePointsData}
      editable={{
        onRowAdd: (newData: SurfacePoint) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const data = reshapeData(newData);
              dispatch(putSurfacePoint(data));
              resolve();
            }, 100);
          }),
        onRowUpdate: (newData: SurfacePoint) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const data = reshapeData(newData);
              dispatch(putSurfacePoint(data));
              resolve();
            }, 100);
          }),
        onRowDelete: (newData: SurfacePoint) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const data = reshapeData(newData);
              dispatch(deleteSurfacePoint(data));
              resolve();
            }, 100);
          }),
      }}
    />
  );
}

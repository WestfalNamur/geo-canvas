import React from "react";
import MaterialTable, { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  addSurfacePoint,
  putSurfacePoint,
  deleteSurfacePoint,
} from "../../store/geoData/surfacePoints/actions";
import { SurfacePoint } from "../../store/geoData/surfacePoints/types";

interface Lookup {
  [key: string]: string;
}

export default function SurfacePointsTable() {
  // connect to store
  const surfacePointsData = useSelector(
    (state: RootState) => state.geoData.surfacePoints.surfacePoints
  );
  const surfacesData = useSelector(
    (state: RootState) => state.geoData.surfaces.surfaces
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
    { title: "probdist", field: "probdist", lookup: { normal: "normal" } },
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
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const data = reshapeData(newData);
              dispatch(addSurfacePoint(data));
              resolve();
            }, 100);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              if (oldData) {
                const newSurfacePointData = reshapeData(newData);
                const oldSurfacePointData = reshapeData(oldData);
                dispatch(
                  putSurfacePoint(newSurfacePointData, oldSurfacePointData)
                );
              } else {
                console.log("oldData missing");
              }
              resolve();
            }, 100);
          }),
        onRowDelete: (newData) =>
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

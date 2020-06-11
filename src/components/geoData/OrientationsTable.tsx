import React from "react";
import MaterialTable, { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  putOrientation,
  deleteOrientation,
} from "../../store/Orientations/actions";
import { Orientation } from "../../store/Orientations/types";

interface Lookup {
  [key: string]: string;
}

export default function OrientationsTable() {
  // connect to store
  const orientaionData = useSelector(
    (state: RootState) => state.orientations.orientations
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
  const columns: Array<Column<Orientation>> = [
    { title: "x", field: "x", type: "numeric" },
    { title: "y", field: "y", type: "numeric" },
    { title: "z", field: "z", type: "numeric" },
    { title: "azimuth", field: "azimuth", type: "numeric" },
    { title: "dip", field: "dip", type: "numeric" },
    { title: "polarity", field: "polarity", type: "numeric" },
    { title: "surface", field: "surface", lookup },
    { title: "probdist", field: "probdist", lookup: { 0: "normal" } },
    { title: "param1", field: "param1", type: "numeric" },
    { title: "param2", field: "param2", type: "numeric" },
    { title: "active", field: "active", type: "boolean" },
  ];
  // helper functions // convert input String types to Number
  const reshapeData = (newData: Orientation) => {
    const reshapedData: Orientation = {
      id: `${newData.x}${newData.y}${newData.z}`,
      x: Number(newData.x),
      y: Number(newData.y),
      z: Number(newData.z),
      azimuth: Number(newData.azimuth),
      polarity: Number(newData.polarity),
      dip: Number(newData.dip),
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
      title="Orientations"
      columns={columns}
      data={orientaionData}
      editable={{
        onRowAdd: (newData: Orientation) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const data = reshapeData(newData);
              dispatch(putOrientation(data));
              resolve();
            }, 100);
          }),
        onRowUpdate: (newData: Orientation) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const data = reshapeData(newData);
              dispatch(putOrientation(data));
              resolve();
            }, 100);
          }),
        onRowDelete: (newData: Orientation) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const data = reshapeData(newData);
              dispatch(deleteOrientation(data));
              resolve();
            }, 100);
          }),
      }}
    />
  );
}

import React, { useState } from "react";
import MaterialTable, { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { putSurface, deleteSurface } from "../../store/surfaces/actions";
import { Surface } from "../../store/surfaces/types";

interface TableState {
  columns: Array<Column<Surface>>;
  data: Surface[];
}

export default function SurfacesTable() {
  const surfacesData = useSelector(
    (state: RootState) => state.surfaces.surfaces
  );
  const seriesData = useSelector((state: RootState) => state.series.series);
  const lookups = seriesData.map((serie) => ({ [serie.name]: serie.name }));
  let lookup: any = {};
  seriesData.map((serie) => {
    lookup = { ...lookup, ...{ [serie.name]: serie.name } };
  });
  const dispatch = useDispatch();
  const [state] = useState<TableState>({
    columns: [
      { title: "Name", field: "name" },
      {
        title: "Series",
        field: "Series",
        lookup: lookup,
      },
    ],
    data: [],
  });

  return (
    <MaterialTable
      title="Surfaces"
      columns={state.columns}
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

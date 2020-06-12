import React from "react";
import MaterialTable, { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { putSeries, deleteSeries } from "../../store/geoData/series/actions";
import { Serie } from "../../store/geoData/series/types";

export default function SeriesTable() {
  const seriesData = useSelector((state: RootState) => state.series.series);
  const dispatch = useDispatch();
  const columns: Array<Column<Serie>> = [
    { title: "Name", field: "name" },
    {
      title: "Isfault",
      field: "isfault",
      type: "boolean"
    },
  ];

  return (
    <MaterialTable
      title="Series"
      columns={columns}
      data={seriesData}
      editable={{
        onRowAdd: (newData: Serie) =>
          new Promise((resolve) => {
            setTimeout(() => {
              dispatch(putSeries(newData));
              resolve();
            }, 100);
          }),
        onRowUpdate: (newData: Serie) =>
          new Promise((resolve) => {
            setTimeout(() => {
              dispatch(putSeries(newData));
              resolve();
            }, 100);
          }),
        onRowDelete: (newData: Serie) =>
          new Promise((resolve) => {
            setTimeout(() => {
              dispatch(deleteSeries(newData));
              resolve();
            }, 100);
          }),
      }}
    />
  );
}

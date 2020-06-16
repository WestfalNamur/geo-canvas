import React from "react";
import MaterialTable, { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  addSerie,
  putSeries,
  deleteSeries,
} from "../../store/geoData/series/actions";
import { Serie } from "../../store/geoData/series/types";

export default function SeriesTable() {
  const seriesState = (state: RootState) => state.geoData.series.series;
  const seriesData = useSelector(seriesState);
  const dispatch = useDispatch();
  const columns: Array<Column<Serie>> = [
    { title: "Name", field: "name" },
    {
      title: "Isfault",
      field: "isfault",
      type: "boolean",
    },
  ];

  return (
    <MaterialTable
      title="Series"
      columns={columns}
      data={seriesData}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              dispatch(addSerie(newData));
              resolve();
            }, 100);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              oldData
                ? dispatch(putSeries(newData, oldData))
                : console.log("oldData missing in onRowUpdate in SeriesTable");
              resolve();
            }, 100);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              dispatch(deleteSeries(oldData));
              resolve();
            }, 100);
          }),
      }}
    />
  );
}

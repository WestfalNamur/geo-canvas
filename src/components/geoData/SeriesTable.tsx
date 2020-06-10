import React from "react";
import MaterialTable, { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { putSeries, deleteSeries } from "../../store/series/actions";
import { Serie } from "../../store/series/types";

interface TableState {
  columns: Array<Column<Serie>>;
  data: Serie[];
}

export default function MaterialTableDemo() {
  const seriesData = useSelector((state: RootState) => state.series.series);
  const dispatch = useDispatch();
  const [state] = React.useState<TableState>({
    columns: [
      { title: "Name", field: "name" },
      {
        title: "Isfault",
        field: "isfault",
        type: "boolean",
        initialEditValue: false,
      },
    ],
    data: [],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
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
        onRowDelete: (newData) =>
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

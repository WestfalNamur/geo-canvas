import React from "react";
import MaterialTable, { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { putSeries } from "../../store/series/actions";

interface Row {
  name: string;
  isfault: boolean;
}

export default function MaterialTableDemo() {
  const seriesData = useSelector((state: RootState) => state.series.series);
  const dispatch = useDispatch();
  const columns: Array<Column<Row>> = [
    { title: "Name", field: "name" },
    {
      title: "isfault",
      field: "IsFault",
      type: "boolean",
      initialEditValue: false,
    },
  ];

  return (
    <MaterialTable
      title="Editable Example"
      columns={columns}
      data={seriesData}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              dispatch(putSeries(newData));
            }, 600);
          }),
      }}
    />
  );
}

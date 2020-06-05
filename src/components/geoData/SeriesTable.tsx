import React, { useState } from "react";
import MaterialTable, { Column } from "material-table";

interface Row {
  name: string;
  isfault: boolean;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export default function SeriesTable() {
  const [state, setState] = useState<TableState>({
    columns: [
      { title: "Name", field: "name" },
      { title: "Isfault", field: "isfault" },
    ],
    data: [
      { name: "Series0", isfault: false },
      { name: "Series1", isfault: false },
      { name: "Series2", isfault: false },
      { name: "FaultSeries", isfault: true },
    ],
  });

  return (
    <MaterialTable
      title="Series Table"
      columns={state.columns}
      data={state.data}
      options={{
        search: false,
        sorting: true,
        paging: false,
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

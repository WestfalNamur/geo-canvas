import React from "react";
import MaterialTable, { Column } from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { putSeries } from "../../store/series/actions";
import { Serie } from "../../store/series/types";

/*
 * TODO: fix ignore
 */

interface Row {
  name: string;
  isfault: boolean;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export default function MaterialTableDemo() {
  const seriesData = useSelector((state: RootState) => state.series.series);
  const dispatch = useDispatch();
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: "Name", field: "name" },
      { title: "Isfault", field: "isfault", type: "boolean" },
    ],
    data: [],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={seriesData}
      actions={[
        {
          icon: "edit",
          tooltip: "edit",
          onClick: (event, rowData) => {
            dispatch(putSeries({ name: "NewSerie", isfault: false }));
            // @ts-ignore
            dispatch(putSeries(rowData));
          },
        },
      ]}
    />
  );
}
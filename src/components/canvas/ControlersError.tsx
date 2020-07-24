import React from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { putSurfacePoint } from "../../store/geoData/surfacePoints/actions";
import { SurfacePoint } from "../../store/geoData/surfacePoints/types";

export default function ControlersError() {
  // store
  const dispatch = useDispatch();
  const surfacePointsState = (state: RootState) =>
    state.geoData.surfacePoints.surfacePoints;
  const surfacePoints = useSelector(surfacePointsState);
  const selectedSurfacePointState = (state: RootState) =>
    state.meta.selections.selectedSurfacePoint;
  const selectedSurfacePoint = useSelector(selectedSurfacePointState);
  // get selected surface points data
  const data = surfacePoints.filter((p) => {
    return String(p.id) === String(selectedSurfacePoint.id);
  });
  // logic
  // Array does not exist, is not an array, is empty
  if (!Array.isArray(data) || !data.length) {
    return (
      <TextField
        value=""
        type="number"
        variant="outlined"
        label="SurfacePointError"
      />
    );
  } else {
    const { param1 } = data[0];
    console.log(data);
    return (
      <TextField
        value={param1}
        type="number"
        variant="outlined"
        label="SurfacePointError"
        onChange={(event) => {
          const newData: SurfacePoint = {
            ...data[0],
            ...{ ["param1"]: Number(event.target.value) },
          };
          dispatch(putSurfacePoint(newData, data[0]));
        }}
      />
    );
  }
}

import React from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { updateExtent } from "../../store/meta/extent/actions";
import { Extent } from "../../store/meta/extent/types";

interface Props {
  label: string;
  extentValue: Number;
}

export default function ExtentFormSingle({ label, extentValue }: Props) {
  // store
  const extentState = (state: RootState) => state.meta.extent.extent;
  const extent = useSelector(extentState);
  const dispatch = useDispatch();
  // wont update if input is not convertable to number type;
  const form = (
    <TextField
      value={String(extentValue)}
      onChange={(event) => {
        const newExtent: Extent = {
          ...extent,
          ...{ [label]: Number(event.target.value) },
        };
        dispatch(updateExtent(newExtent, extent));
      }}
      type="number"
      variant="outlined"
      label={label}
    />
  );
  return form;
}

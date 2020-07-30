import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { updateSelectedDrawingOption } from "../../../store/meta/selected/actions";
import { SelectedDrawingOption } from "../../../store/meta/selected/types";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function DrawingOption() {
  // connect to store
  const dispatch = useDispatch();
  const selectedSurfaceState = (state: RootState) =>
    state.meta.selections.selectedSurface;
  const selectedSurface = useSelector(selectedSurfaceState);
  const drawingOptions = ["Line", "Point", "None"];
  const selectedDrawingOptionState = (state: RootState) =>
    state.meta.selections.selectedDrawingOption;
  const selectedDrawingOption = useSelector(selectedDrawingOptionState);
  // process data

  let choosenOption = "None";

  if (
    typeof selectedDrawingOption.option === "string" &&
    selectedDrawingOption.option !== ""
  ) {
    choosenOption = selectedDrawingOption.option;
  }

  console.log(selectedDrawingOption.option);

  // handle change
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    try {
      const selectedDrawingOption: SelectedDrawingOption = {
        option: event.target.value as string,
      };
      dispatch(updateSelectedDrawingOption(selectedDrawingOption));
    } catch (err) {}
  };
  // return
  if (
    typeof selectedSurface.name == "string" &&
    selectedSurface.name !== "None"
  ) {
    return (
      <Select
        label="Selected surface"
        value={choosenOption}
        onChange={handleChange}
        variant="outlined"
      >
        {drawingOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    );
  } else {
    return (
      <Select
        label="Selected surface"
        value={choosenOption}
        onChange={handleChange}
        variant="outlined"
      >
        <MenuItem key={"None"} value={""}>
          {"None"}
        </MenuItem>
      </Select>
    );
  }
}

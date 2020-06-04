import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { updateExtent } from "../../store/extent/actions";

/* Single extent form.
 * TODO: - Source value=store value for value-i
 *       - Avoide double render / disptach
 */

interface Props {
  label: string;
}

export default function ExtentFormSingle({ label }: Props) {
  const [value, setValue] = useState("0");
  const dispatch = useDispatch();

  value !== "" &&
    dispatch(
      updateExtent({
        name: label,
        value: Number(value),
      })
    );

  const invalidInput = (
    <TextField
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      error
      type="number"
      variant="outlined"
      label={label}
      helperText="Must be a number"
    />
  );
  const validInput = (
    <TextField
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      type="number"
      variant="outlined"
      label={label}
    />
  );
  return value === "" ? invalidInput : validInput;
}

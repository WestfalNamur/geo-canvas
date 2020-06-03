import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function useExtentInput({ lable }: any) {
  // limit input to number
  // convert event input to number
  const [value, setValue] = useState("0");
  const invalidInput = (
    <TextField
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      error
      type="number"
      variant="outlined"
      label={lable}
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
      label={lable}
    />
  );

  return value === "" ? invalidInput : validInput;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

export default function ExtentForm() {
  const classes = useStyles();

  const xminInput = useExtentInput({ lable: "xmin" });
  const xmaxInput = useExtentInput({ lable: "xmax" });
  const yminInput = useExtentInput({ lable: "ymin" });
  const ymaxInput = useExtentInput({ lable: "ymax" });
  const zminInput = useExtentInput({ lable: "zmin" });
  const zmaxInput = useExtentInput({ lable: "zmax" });

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {xminInput}
      {xmaxInput}
      {yminInput}
      {ymaxInput}
      {zminInput}
      {zmaxInput}
    </form>
  );
}

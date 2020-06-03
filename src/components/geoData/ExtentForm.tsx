import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";

function useExtentInput({ lable }: any) {
  // limit input to number
  // convert event input to number
  const [value, setValue] = useState("0");
  const input = (
    <TextField
      value={value}
      onChange={(event) => setValue(event.target.value)}
      type="number"
      variant="outlined"
      label={lable}
    />
  );
  return [value, input];
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

  const [xmin, xminInput] = useExtentInput({ lable: "xmin" });
  const [xmax, xmaxInput] = useExtentInput({ lable: "xmax" });
  const [ymin, yminInput] = useExtentInput({ lable: "ymin" });
  const [ymax, ymaxInput] = useExtentInput({ lable: "ymax" });
  const [zmin, zminInput] = useExtentInput({ lable: "zmin" });
  const [zmax, zmaxInput] = useExtentInput({ lable: "zmax" });

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

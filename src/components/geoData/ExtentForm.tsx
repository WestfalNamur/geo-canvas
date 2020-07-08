import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ExtentFormSingle from "./ExtentFormSingle";

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
  //styling
  const classes = useStyles();
  // store
  const extentState = (state: RootState) => state.meta.extent.extent;
  const extent = useSelector(extentState);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <ExtentFormSingle label="x_min" extentValue={extent.x_min} />
      <ExtentFormSingle label="x_max" extentValue={extent.x_max} />
      <ExtentFormSingle label="y_min" extentValue={extent.y_min} />
      <ExtentFormSingle label="y_max" extentValue={extent.y_max} />
      <ExtentFormSingle label="z_min" extentValue={extent.z_min} />
      <ExtentFormSingle label="z_max" extentValue={extent.z_max} />
    </form>
  );
}

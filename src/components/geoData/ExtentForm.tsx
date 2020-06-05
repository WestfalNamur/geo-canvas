import React from "react";
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
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <ExtentFormSingle label="xmin" />
      <ExtentFormSingle label="xmax" />
      <ExtentFormSingle label="ymin" />
      <ExtentFormSingle label="ymax" />
      <ExtentFormSingle label="zmin" />
      <ExtentFormSingle label="zmax" />
    </form>
  );
}

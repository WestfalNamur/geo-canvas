import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      flexGrow: 1,
      backgroundColor: "#00695C",
    },
    link: {
      color: "#F9A825",
      flexGrow: 1,
    },
  })
);

function AppBarTop() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <NavLink to="/canvas" className={classes.link}>
            Canvas
          </NavLink>
          <NavLink to="/geodata" className={classes.link}>
            GeoData
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(AppBarTop);

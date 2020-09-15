import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import { NavLink, withRouter } from "react-router-dom";
import { APP_BAR_HEIGHT } from "../utils/CONSTANTS";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      flexGrow: 1,
      backgroundColor: "#347B98",
      height: APP_BAR_HEIGHT,
    },
    link: {
      color: "black",
    },
    linkActive: {
      color: "white",
    },
    tab: {
      fontSize: 20,
    },
  })
);

function AppBarTop() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <NavLink
          to="/geodata"
          activeClassName={classes.linkActive}
          className={classes.link}
        >
          <Tab label="Geo Data" className={classes.tab} />
        </NavLink>
        <NavLink
          to="/canvas"
          activeClassName={classes.linkActive}
          className={classes.link}
        >
          <Tab label="Canvas" className={classes.tab} />
        </NavLink>
        <NavLink
          to="/dropzone"
          activeClassName={classes.linkActive}
          className={classes.link}
        >
          <Tab label="Dropzone" className={classes.tab} />
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(AppBarTop);

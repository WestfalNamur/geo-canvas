import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { FOTTER_HEIGHT } from "../../utils/CONSTANTS";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateSection } from "../../store/meta/section/actions";
import { Section } from "../../store/meta/section/types";
import { getSectionPolygons } from "../../store/solutions/sectionPolygons/actions";

const useStyles = makeStyles({
  root: {
    width: 300,
    maxHeight: FOTTER_HEIGHT,
  },
  slider: {
    width: 200,
    float: "left",
  },
  switch: {
    width: 100,
    float: "left",
  },
});

export default function Controlers() {
  const classes = useStyles();

  // connet to store
  const dispatch = useDispatch();
  const extentState = (state: RootState) => state.meta.extent.extent;
  const extent = useSelector(extentState);
  const sectionState = (state: RootState) => state.meta.section.section;
  const section = useSelector(sectionState);

  // local variabels
  const [axisIsX, setAxisIsX] = useState<boolean>(true);
  const stepSize = (extent.x_max - extent.x_min) / 10;
  const positionOnAxis = `Position on axis: ${section.p1[1]}`;

  // functions
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    const slice: number = typeof newValue === "number" ? newValue : newValue[0];
    const oldSection = section;
    const newSection: Section = {
      p1: [section.p1[0], slice],
      p2: [section.p2[0], slice],
      resolution: section.resolution,
    };
    dispatch(updateSection(newSection, oldSection));
    dispatch(getSectionPolygons());
  };

  console.log(axisIsX)
  const handleSwitchToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAxisIsX(!axisIsX);
  };

  return (
    <div className={classes.root}>
      <div className={classes.slider}>
        <Typography id="continuous-slider" gutterBottom>
          {positionOnAxis}
        </Typography>
        <Grid item xs>
          <Slider
            value={section.p1[1]}
            aria-labelledby="discrete-slider-small-steps"
            step={stepSize}
            marks
            min={extent.x_min}
            max={extent.x_max}
            valueLabelDisplay="auto"
            onChange={handleSliderChange}
          />
        </Grid>
      </div>
      <div className={classes.switch}>
        <Switch
          checked={axisIsX}
          onChange={handleSwitchToggle}
          color="primary"
          name="AxisIsX"
        />
      </div>
    </div>
  );
}

import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { FOTTER_HEIGHT } from "../../utils/CONSTANTS";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { updateSection } from "../../store/meta/section/actions";
import { Section } from "../../store/meta/section/types";
import { getSectionTops } from "../../store/solutions/sectionTops/actions";

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

  // local variabel: boolean selected axis is x-axis;
  const [axisIsX, setAxisIsX] = useState<boolean>(true);
  // local variabel: function of selected axis and its extent;
  const stepSize: number = axisIsX
    ? (extent.x_max - extent.x_min) / 10
    : (extent.y_max - extent.y_min) / 10;
  // local variabel: header for slider as function of selected axis;
  const positionOnAxis: string = axisIsX
    ? `Position on x-axis: ${section.p1[0]}`
    : `Position on y-axis: ${section.p1[1]}`;
  // local variabel: middle of the slected axis to provide a value when
  // switching axis;
  const middleSection: number = axisIsX
    ? (extent.x_max - extent.x_min) / 2
    : (extent.y_max - extent.y_min) / 2;

  // functions: handles changes of the slider by dispatching the updated
  // section and requesting a new polygon set; Slices/sections are along axis
  // not perpendicular to it;
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    const slice: number = typeof newValue === "number" ? newValue : newValue[0];
    const oldSection = section;
    const newSection: Section = axisIsX
      ? {
          p1: [slice, section.p1[1]], // [x0, y0]
          p2: [slice, section.p2[1]], // [x1, y1]
          resolution: section.resolution,
        }
      : {
          p1: [section.p1[0], slice], // [x0, y0]
          p2: [section.p2[0], slice], // [x1, y1]
          resolution: section.resolution,
        };
    dispatch(updateSection(newSection, oldSection));
    dispatch(getSectionTops());
  };

  // handles axis switch; Before switch the values of the selected axis are
  // the same for p1 and p2. Hence they need to be set to thier extent values
  // on switch and the other axis values get a default of the middle of the
  // section; Dispatches new section and requests new polygons;
  const handleSwitchToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAxisIsX(!axisIsX);
    const oldSection = section;
    const newSection: Section = !axisIsX
      ? {
          p1: [middleSection, extent.y_min],
          p2: [middleSection, extent.y_max],
          resolution: section.resolution,
        }
      : {
          p1: [extent.x_min, middleSection],
          p2: [extent.x_max, middleSection],
          resolution: section.resolution,
        };
    dispatch(updateSection(newSection, oldSection));
    dispatch(getSectionTops());
  };

  return (
    <div className={classes.root}>
      <div className={classes.slider}>
        <Typography id="continuous-slider" gutterBottom>
          {positionOnAxis}
        </Typography>
        <Grid item xs>
          {axisIsX ? (
            <Slider
              value={section.p1[0]}
              aria-labelledby="discrete-slider-small-steps"
              step={stepSize}
              marks
              min={extent.x_min}
              max={extent.x_max}
              valueLabelDisplay="auto"
              onChange={handleSliderChange}
            />
          ) : (
            <Slider
              value={section.p1[1]}
              aria-labelledby="discrete-slider-small-steps"
              step={stepSize}
              marks
              min={extent.y_min}
              max={extent.y_max}
              valueLabelDisplay="auto"
              onChange={handleSliderChange}
            />
          )}
        </Grid>
      </div>
      <div className={classes.switch}>
        <FormControlLabel
          value="top"
          control={
            <Switch
              checked={axisIsX}
              onChange={handleSwitchToggle}
              color="primary"
              name="AxisIsX"
            />
          }
          label={axisIsX ? "Axis: X" : "Axis: Y"}
          labelPlacement="top"
        />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Konva from "konva";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { Stage, Layer, Rect } from "react-konva";
import LayerPoints from "./LayerPoints";
import LayerSectionTops from "./LayerSectionTops";
import LayerOrientations from "./LayerOrientations";
import { SurfacePoint } from "../../../store/geoData/surfacePoints/types";
import { putSurfacePoint } from "../../../store/geoData/surfacePoints/actions";
import { getSectionTops } from "../../../store/solutions/sectionTops/actions";
import { SelectedSurfacePoint } from "../../../store/meta/selected/types";
import { updateSelectedSurfacePoint } from "../../../store/meta/selected/actions";
import { Orientation } from "../../../store/geoData/orientations/types";
import { putOrientation } from "../../../store/geoData/orientations/actions";
import { APP_BAR_HEIGHT } from "../../../utils/CONSTANTS";
import { v4 as uuidv4 } from "uuid";
import {
  addSurfacePoint,
  addSurfacePointToLine,
  clearLine,
  paraLine,
} from "../../../store/geoData/surfacePoints/actions";

/* StageComponent
 * Issue:
 * react-konva is losing the context information from the tree above.
 * Therfore konva-stage is a context barrier for the redux-store.  *
 * on github:
 * Todo: Bridge context barrier following github issue:
 * https://github.com/konvajs/react-konva/issues/188#issuecomment-478302062
 * So everything is a bit... messy here...
 */

export default function StageComponent() {
  // state
  const [isDown, setIsDown] = useState(false);

  // conect to store
  const dispatch = useDispatch();

  const canvasSizeState = (state: RootState) =>
    state.canvas.canvasSize.canvasSize;
  const canvasSize = useSelector(canvasSizeState);

  const sectionState = (state: RootState) => state.meta.section.section;
  const section = useSelector(sectionState);

  const extentState = (state: RootState) => state.meta.extent.extent;
  const extent = useSelector(extentState);

  const surfacesState = (state: RootState) => state.geoData.surfaces.surfaces;
  const surfaces = useSelector(surfacesState);

  const surfacePointsState = (state: RootState) =>
    state.geoData.surfacePoints.surfacePoints;
  const surfacePoints = useSelector(surfacePointsState);

  const secetionTopsState = (state: RootState) =>
    state.solutions.sectionTops.sectionTops;
  const sectionTops = useSelector(secetionTopsState);

  const orientationsState = (state: RootState) =>
    state.geoData.orientations.orientations;
  const orientations = useSelector(orientationsState);

  const selectedSurfaceState = (state: RootState) =>
    state.meta.selections.selectedSurface;
  const selectedSurface = useSelector(selectedSurfaceState);

  const selectedDrawingOptionState = (state: RootState) =>
    state.meta.selections.selectedDrawingOption;
  const selectedDrawingOption = useSelector(selectedDrawingOptionState);

  const alongAxisIsXState = (state: RootState) =>
    state.meta.selections.alongAxisX;
  const alongAxisX = useSelector(alongAxisIsXState);

  const linePointsState = (state: RootState) =>
    state.geoData.surfacePoints.linePoints;
  const linePoints = useSelector(linePointsState);

  const surfaceNames: string[] = surfaces.map((s) => s.name);

  // local variabel: boolean selected axis is x-axis;
  const [axisIsX, setAxisIsX] = useState<boolean>(true);
  // local variabel: function of selected axis and its extent;
  const stepSize: number = alongAxisX
    ? (extent.x_max - extent.x_min) / 10
    : (extent.y_max - extent.y_min) / 10;
  // local variabel: header for slider as function of selected axis;
  const positionOnAxis: string = alongAxisX
    ? `Position on x-axis: ${section.p1[0]}`
    : `Position on y-axis: ${section.p1[1]}`;
  // local variabel: middle of the slected axis to provide a value when
  // switching axis;
  const middleSection: number = alongAxisX
    ? (extent.x_max - extent.x_min) / 2
    : (extent.y_max - extent.y_min) / 2;

  const updatePointCoordinates = (e: Konva.KonvaEventObject<DragEvent>) => {
    // destructure
    const { id, x, y } = e.target.attrs;
    // get meta data
    const alongAxisX: boolean = section.p1[0] === section.p2[0] ? true : false;
    // get old surfacePoint data
    const oldSurfacePointData = surfacePoints.filter(
      (surfacePoint) => surfacePoint.id === id
    );
    // deep copy
    let newSurfacePointData: SurfacePoint = Object.assign(
      oldSurfacePointData[0]
    );
    // update to newCoordinates
    if (!alongAxisX) {
      newSurfacePointData.x = (x / canvasSize.width) * extent.x_max;
    } else {
      newSurfacePointData.y = (x / canvasSize.width) * extent.y_max;
    }
    newSurfacePointData.z = (y / canvasSize.height) * extent.z_max;
    console.log("newSurfacePointData:", newSurfacePointData);
    // dispatch update of surface point
    const selectedSurfacePoint: SelectedSurfacePoint = { id };
    dispatch(updateSelectedSurfacePoint(selectedSurfacePoint));
    dispatch(putSurfacePoint(newSurfacePointData, oldSurfacePointData[0]));
    // request new top
    dispatch(getSectionTops());
  };

  const showIEState = (state: RootState) => state.meta.selections.showIE.showIe;
  const showIE = useSelector(showIEState);

  const updateOrientationCoordinates = (
    e: Konva.KonvaEventObject<DragEvent>
  ) => {
    // destructure
    const { id, x, y } = e.target.attrs;
    // get meta data
    const alongAxisX: boolean = section.p1[0] === section.p2[0] ? true : false;
    // get old surfacePoint data
    const oldOrientaionData = orientations.filter(
      (orientation) => orientation.id === id
    );
    // deep copy
    let newOrientaionData: Orientation = Object.assign(oldOrientaionData[0]);
    // update to newCoordinates
    if (alongAxisX) {
      newOrientaionData.x = (x / canvasSize.width) * extent.x_max;
    } else {
      newOrientaionData.y = (x / canvasSize.width) * extent.y_max;
    }
    newOrientaionData.z = (y / canvasSize.height) * extent.z_max;
    // dispatch update of surface point
    const selectedSurfacePoint: SelectedSurfacePoint = { id };
    dispatch(updateSelectedSurfacePoint(selectedSurfacePoint));
    // TODO: hanlde selected orientation
    dispatch(putOrientation(newOrientaionData, oldOrientaionData[0]));
    // request new top
    dispatch(getSectionTops());
  };

  const mouseMove = (e: any) => {
    // Function to drawn a line;
    // 1st gather all points while mouse is down
    // Then take every 10th and put them as new surfacepoint;
    if (selectedSurface.name) {
      if (surfaceNames.includes(selectedSurface.name)) {
        if (selectedDrawingOption.option === "Line") {
          const mouseY: number =
            canvasSize.height + APP_BAR_HEIGHT - e.evt.clientY;
          // scale the postion to model coordinates
          const z = (mouseY / canvasSize.height) * extent.z_max;
          let x = 0;
          let y = 0;
          if (!alongAxisX) {
            y = section.p1[1];
            x = (e.evt.clientX / canvasSize.width) * extent.x_max;
          } else {
            y = (e.evt.clientX / canvasSize.width) * extent.y_max;
            x = section.p1[0];
          }
          const new_id: string = uuidv4();
          const newSurfacePoint: SurfacePoint = {
            id: new_id,
            x: x,
            y: y,
            z: z,
            surface: selectedSurface.name,
            probdist: "normal",
            param1: 10,
            param2: 1,
            active: true,
            locstr: `${x}${y}${z}`,
          };
          dispatch(addSurfacePointToLine(newSurfacePoint));
        }
      }
    }
  };

  const handleMouseClick = (e: any) => {
    if (selectedSurface.name) {
      if (surfaceNames.includes(selectedSurface.name)) {
        if (selectedDrawingOption.option === "Point") {
          // calc postion: mouse-pos on realitve to window not to canvas:
          // this includes the top-bar & is the axis it not scaleY={-1}.
          // height from top left down till end of canvas
          // we have to rescale the mouseY position to count from bottom of
          const mouseY: number =
            canvasSize.height + APP_BAR_HEIGHT - e.evt.clientY;
          // scale the postion to model coordinates
          const z = (mouseY / canvasSize.height) * extent.z_max;
          let x = 0;
          let y = 0;
          // if (alongAxisX) {
          //   y = section.p1[1];
          //   x = (e.evt.clientX / canvasSize.width) * extent.x_max;
          // } else {
          //   y = (e.evt.clientX / canvasSize.width) * extent.y_max;
          //   x = section.p1[0];
          // }
          // HOTFOF: We always move along the Y-axis
          y = section.p1[1];
          x = (e.evt.clientX / canvasSize.width) * extent.x_max;
          const new_id: string = uuidv4();
          const newSurfacePoint: SurfacePoint = {
            id: new_id,
            x: x,
            y: y,
            z: z,
            surface: selectedSurface.name,
            probdist: "normal",
            param1: 10,
            param2: 1,
            active: true,
            locstr: `${x}${y}${z}`,
          };
          console.log(newSurfacePoint);
          dispatch(addSurfacePoint(newSurfacePoint));
          dispatch(getSectionTops());
        }
      }
    }
  };

  const handleMouseDown = () => {
    setIsDown(true);
    if (selectedSurface.name) {
      if (surfaceNames.includes(selectedSurface.name)) {
        if (selectedDrawingOption.option === "Line") {
          dispatch(clearLine());
        }
      }
    }
  };

  // sleep function
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleMouseUp = () => {
    setIsDown(false);
    if (selectedSurface.name) {
      if (surfaceNames.includes(selectedSurface.name)) {
        if (selectedDrawingOption.option === "Line") {
          // take 10 points or less
          const len: number = linePoints.length;
          const stp: number = Math.round(len / 10)
          linePoints.forEach(async (p, i) => {
            // to avoide over extending flask
            await sleep(500);
            console.log(i);
            if (i % stp == 0) {
              dispatch(addSurfacePoint(p));
            }
          });
          dispatch(paraLine());
        }
      }
    }
  };

  return (
    <Stage
      width={canvasSize.width}
      height={canvasSize.height}
      scaleY={-1}
      y={canvasSize.height}
      onMouseDown={(e) => handleMouseDown()}
      onMouseUp={(e) => handleMouseUp()}
      onMouseMove={(e) => isDown && mouseMove(e)}
      onClick={(e) => handleMouseClick(e)}
    >
      <Layer>
        <Rect
          width={canvasSize.width}
          height={canvasSize.height}
          fill="#333333"
        />
      </Layer>
      <LayerSectionTops
        sectionTops={sectionTops}
        section={section}
        extent={extent}
        canvasSize={canvasSize}
        surfaces={surfaces}
      />
      <LayerPoints
        surfacePoints={surfacePoints}
        surfaces={surfaces}
        section={section}
        extent={extent}
        canvasSize={canvasSize}
        updatePointCoordinates={updatePointCoordinates}
      />
      <LayerOrientations
        orientations={orientations}
        surfaces={surfaces}
        section={section}
        extent={extent}
        canvasSize={canvasSize}
        updateOrientationCoordinates={updateOrientationCoordinates}
      />
    </Stage>
  );
}

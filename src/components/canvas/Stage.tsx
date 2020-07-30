import React, { useState } from "react";
import Konva from "konva";
import useImage from "use-image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { Stage, Layer, Rect, Image } from "react-konva";
import LayerPoints from "./LayerPoints";
import LayerSectionTops from "./LayerSectionTops";
import LayerOrientations from "./LayerOrientations";
import { SurfacePoint } from "../../store/geoData/surfacePoints/types";
import { putSurfacePoint } from "../../store/geoData/surfacePoints/actions";
import { getSectionTops } from "../../store/solutions/sectionTops/actions";
import { SelectedSurfacePoint } from "../../store/meta/selected/types";
import { updateSelectedSurfacePoint } from "../../store/meta/selected/actions";
import { Orientation } from "../../store/geoData/orientations/types";
import { putOrientation } from "../../store/geoData/orientations/actions";
import { Surface } from "../../store/geoData/surfaces/types";

/* StageComponent
 * Issue:
 * react-konva is losing the context information from the tree above.
 * Therfore konva-stage is a context barrier for the redux-store.  *
 * on github:
 * Todo: Bridge context barrier following github issue:
 * https://github.com/konvajs/react-konva/issues/188#issuecomment-478302062
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

  const surfaceNames: string[] = surfaces.map((s) => s.name);

  const updatePointCoordinates = (e: Konva.KonvaEventObject<DragEvent>) => {
    // destructure
    const { id, x, y } = e.target.attrs;
    // get meta data
    const axisIsX: boolean = section.p1[0] === section.p2[0] ? true : false;
    // get old surfacePoint data
    const oldSurfacePointData = surfacePoints.filter(
      (surfacePoint) => surfacePoint.id === id
    );
    // deep copy
    let newSurfacePointData: SurfacePoint = Object.assign(
      oldSurfacePointData[0]
    );
    // update to newCoordinates
    if (axisIsX) {
      newSurfacePointData.x = (x / canvasSize.width) * extent.x_max;
    } else {
      newSurfacePointData.y = (x / canvasSize.width) * extent.y_max;
    }
    newSurfacePointData.z = (y / canvasSize.height) * extent.z_max;
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
    const axisIsX: boolean = section.p1[0] === section.p2[0] ? true : false;
    // get old surfacePoint data
    const oldOrientaionData = orientations.filter(
      (orientation) => orientation.id === id
    );
    // deep copy
    let newOrientaionData: Orientation = Object.assign(oldOrientaionData[0]);
    // update to newCoordinates
    if (axisIsX) {
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

  const Entropy = () => {
    const [image] = useImage(
      "http://127.0.0.1:5000/geo-model/compute/section/entropy-image"
    );
    return (
      <Image
        image={image}
        width={canvasSize.width}
        height={canvasSize.height}
      />
    );
  };

  const mouseMove = (e: any) => {
    if (selectedSurface.name) {
      // console.log(selectedSurface.name)
      console.log(surfaceNames);
      const surface: Surface = surfaces.filter(
        (surface) => surface.name === selectedSurface.name
      );
      console.log(surface);
    }
  };

  // background change on condition
  if (showIE) {
    return (
      <Stage
        width={canvasSize.width}
        height={canvasSize.height}
        scaleY={-1}
        y={canvasSize.height}
      >
        <Layer>
          <Entropy />
        </Layer>
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
  } else {
    return (
      <Stage
        width={canvasSize.width}
        height={canvasSize.height}
        scaleY={-1}
        y={canvasSize.height}
        onMouseDown={(e) => setIsDown(true)}
        onMouseUp={(e) => setIsDown(false)}
        onMouseMove={(e) => isDown && mouseMove(e)}
      >
        <Layer>
          <Rect
            width={canvasSize.width}
            height={canvasSize.height}
            fill="grey"
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
}

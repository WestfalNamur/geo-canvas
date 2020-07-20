import React from "react";
import Konva from "konva";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { Stage, Layer, Rect } from "react-konva";
import LayerPoints from "./LayerPoints";
import LayerSectionTops from "./LayerSectionTops";
import { SurfacePoint } from "../../store/geoData/surfacePoints/types";
import { putSurfacePoint } from "../../store/geoData/surfacePoints/actions";
import { getSectionTops } from "../../store/solutions/sectionTops/actions";
import { SelectedSurfacePoint } from "../../store/meta/selected/types";
import { updateSelectedSurfacePoint } from "../../store/meta/selected/actions";

/* StageComponent
 * Issue:
 * react-konva is losing the context information from the tree above.
 * Therfore konva-stage is a context barrier for the redux-store.  *
 * on github:
 * Todo: Bridge context barrier following github issue:
 * https://github.com/konvajs/react-konva/issues/188#issuecomment-478302062
 */

export default function StageComponent() {
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

  return (
    <Stage
      width={canvasSize.width}
      height={canvasSize.height}
      scaleY={-1}
      y={canvasSize.height}
    >
      <Layer>
        <Rect width={canvasSize.width} height={canvasSize.height} fill="grey" />
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
    </Stage>
  );
}

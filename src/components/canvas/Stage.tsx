import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Stage, Layer, Rect } from "react-konva";
import LayerPoints from "./LayerPoints";
import LayerSectionTops from "./LayerSectionTops";

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

  return (
    <Stage
      width={canvasSize.width}
      height={canvasSize.height}
      scaleY={-1}
      y={canvasSize.height}
    >
      <Layer>
        <Rect
          width={canvasSize.width}
          height={canvasSize.height}
          fill="white"
        />
      </Layer>
      <LayerSectionTops
        sectionTops={sectionTops}
        section={section}
        extent={extent}
        canvasSize={canvasSize}
      />
      <LayerPoints
        surfacePoints={surfacePoints}
        surfaces={surfaces}
        section={section}
        extent={extent}
        canvasSize={canvasSize}
      />
    </Stage>
  );
}

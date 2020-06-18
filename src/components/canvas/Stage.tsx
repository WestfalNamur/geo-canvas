import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { Stage, Layer, Rect } from "react-konva";
import { SectionPolygon } from "../../store/solutions/sectionPolygons/types";
import resSecPol from "../../utils/numerical/rescaleSectionPolygons";

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

  const sectionPolygonsState = (state: RootState) =>
    state.solutions.sectionPolygons.sectionPolygons;
  const sectionPolygons = useSelector(sectionPolygonsState);

  const extentState = (state: RootState) => state.meta.extent.extent;
  const extent = useSelector(extentState);

  // rescale section polygons
  const resSectionPolygons: SectionPolygon[] = resSecPol(
    section,
    canvasSize,
    extent,
    sectionPolygons
  );

  return (
    <Stage width={canvasSize.width} height={canvasSize.height}>
      <Layer>
        <Rect
          width={canvasSize.width}
          height={canvasSize.height}
          fill="rgb(51,51,51)"
        />
      </Layer>
    </Stage>
  );
}

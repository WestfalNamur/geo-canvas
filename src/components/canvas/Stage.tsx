import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { Stage, Layer, Rect } from "react-konva";
import { SectionPolygon } from "../../store/solutions/sectionPolygons/types";
import { Section } from "../../store/meta/section/types";
import { Extent } from "../../store/meta/extent/types";
import { CanvasSize } from "../../store/canvas/canvasSize/types";

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

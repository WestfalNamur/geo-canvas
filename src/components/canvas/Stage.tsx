import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Stage, Layer, Rect } from "react-konva";

export default function StageComponent() {
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

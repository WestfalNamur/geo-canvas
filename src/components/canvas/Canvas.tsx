import React from "react";
import useDimensions from "react-cool-dimensions";
import { CanvasSize } from "../../store/meta/canvasSize/types";
import { updateCanvasSize } from "../../store/meta/canvasSize/action";
import { useDispatch } from "react-redux";

export default function Canvas() {
  const dispatch = useDispatch();
  const { ref, width, height } = useDimensions({
    onResize: ({ width, height }) => {
      const newCanvasSize: CanvasSize = { width, height };
      dispatch(updateCanvasSize(newCanvasSize));
    },
  });

  return (
    //@ts-ignore
    <div ref={ref}>
      Hi! My width is {width}px and height is {height}px
    </div>
  );
}

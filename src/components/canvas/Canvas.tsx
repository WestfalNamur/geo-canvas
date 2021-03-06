import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { APP_BAR_HEIGHT, FOTTER_HEIGHT } from "../../utils/CONSTANTS";
import { updateCanvasSize } from "../../store/canvas/canvasSize/action";
import StageComponent from "./stage/Stage";
import Controlers from './controls/Controlers'

export default function Canvas() {
  const dispatch = useDispatch();
  // update canvas size as it is a function of the windo size
  useLayoutEffect(() => {
    function updateCanvasSizeComp() {
      const { innerWidth, innerHeight } = window;
      const width = innerWidth;
      const height = innerHeight - APP_BAR_HEIGHT - FOTTER_HEIGHT;
      dispatch(updateCanvasSize({ width, height }));
    }
    window.addEventListener("resize", updateCanvasSizeComp);
    updateCanvasSizeComp();
    return () => window.removeEventListener("resize", updateCanvasSizeComp);
  });

  return (
    <div>
      <StageComponent />
      <Controlers />
    </div>
  );
}

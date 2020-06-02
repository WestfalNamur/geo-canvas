import React, { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCanvasSize } from "../../store/canvas/actions";

// window size handler; updates local state and store;
function useWindowSize() {
  const dispatch = useDispatch();
  function updateCanvasSizeToStore() {
    dispatch(
      updateCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    );
    return () => window.removeEventListener("resize", updateCanvasSizeToStore);
  }
  window.addEventListener("resize", updateCanvasSizeToStore);
}

export default function Canvas() {
  useWindowSize();
  return (
    <div className="Canvas">
      <header className="App-header">Hello Canvas!</header>
    </div>
  );
}

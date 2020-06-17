import React, { useRef, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCanvasSize } from "../../store/canvas/actions";

interface CanvasSize {
  width: number;
  height: number;
}

interface ComponentState {
  canvasSize: CanvasSize;
}

export default function Canvas() {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        // @ts-ignore
        width: targetRef.current.offsetWidth,
        // @ts-ignore
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);
  return (
    // @ts-ignore
    <div ref={targetRef}>
      <p>{dimensions.width}</p>
      <p>{dimensions.height}</p>
    </div>
  );
}

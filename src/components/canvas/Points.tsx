import React, { useEffect } from "react";
import { Ellipse, Transformer } from "react-konva";

interface Props {
  x?: number;
  y?: number;
  z: number;
  id: string;
  color: string;
  param1: number;
  updatePointCoordinates: any;
}

export default function Points({
  x,
  y,
  z,
  id,
  color,
  param1,
  updatePointCoordinates,
}: Props) {
  const xval = x ? x : y; // depending if ploting along x or y
  return (
    <Ellipse
      x={xval}
      y={z}
      radiusX={param1}
      radiusY={10}
      id={id}
      key={id}
      fill={color}
      stroke="black"
      draggable={true}
      onDragEnd={updatePointCoordinates}
    />
  );
}

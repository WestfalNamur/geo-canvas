import React from "react";
import { Star } from "react-konva";

interface Props {
  x?: number;
  y?: number;
  z: number;
  id: string;
  color: string;
  param1: number;
  updateOrientationCoordinates: any;
}

export default function Stars({
  x,
  y,
  z,
  id,
  color,
  param1,
  updateOrientationCoordinates,
}: Props) {
  const xval = x ? x : y; // depending if ploting along x or y
  return (
    <Star
      x={xval}
      y={z}
      innerRadius={5}
      outerRadius={param1}
      numPoints={5}
      id={id}
      key={id}
      fill={color}
      stroke="black"
      draggable={true}
      onDragEnd={updateOrientationCoordinates}
    />
  );
}

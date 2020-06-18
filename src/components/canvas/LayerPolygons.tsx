import React from "react";
import { Layer, Line } from "react-konva";
import { SectionPolygon } from "../../store/solutions/sectionPolygons/types";

interface Props {
  polygons: SectionPolygon[]; // | SomeOtherPolygonType
}

export default function LayerPolygons({ polygons }: Props) {
  return (
    <Layer>
      {polygons.map((polygon) => {
        const { name, points } = polygon;
        return (
          <Line key={name as string} points={points} stroke="red" />
        );
      })}
    </Layer>
  );
}

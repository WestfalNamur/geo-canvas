import React from "react";
import { Layer, Line } from "react-konva";
import { Surface } from "../../store/geoData/surfaces/types";
import { SurfacePoint } from "../../store/geoData/surfacePoints/types";
import { Section } from "../../store/meta/section/types";
import { Extent } from "../../store/meta/extent/types";
import { COLOR_LIST } from "../../utils/CONSTANTS";

interface Props {
  surfaces: Surface[];
  surfacePoints: SurfacePoint[];
  section: Section;
  extent: Extent;
}

export default function LayerPolygons({
  surfacePoints,
  surfaces,
  section,
  extent,
}: Props) {
  const axisIsX: boolean = section.p1[0] === section.p2[0] ? true : false;
  const projection_distance: number = axisIsX
    ? (extent.x_max - extent.x_min) / 10
    : (extent.y_max - extent.y_min) / 10;
  const filteredSurfacePoints: SurfacePoint[] = surfacePoints.filter(
    (surfacePoint) => {
      if (axisIsX) {
        return (
          surfacePoint.x > section.p1[0] - projection_distance &&
          surfacePoint.x < section.p1[0] + projection_distance
        );
      } else {
        return (
          surfacePoint.y > section.p1[1] - projection_distance &&
          surfacePoint.y < section.p1[1] + projection_distance
        );
      }
    }
  );
  console.log(filteredSurfacePoints);

  return <Layer></Layer>;
}

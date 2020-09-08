import React from "react";
import { Layer } from "react-konva";
import { Surface } from "../../../store/geoData/surfaces/types";
import { SurfacePoint } from "../../../store/geoData/surfacePoints/types";
import { Section } from "../../../store/meta/section/types";
import { Extent } from "../../../store/meta/extent/types";
import { CanvasSize } from "../../../store/canvas/canvasSize/types";
import { COLOR_LIST } from "../../../utils/CONSTANTS";
import Points from "./Points";

interface Props {
  surfaces: Surface[];
  surfacePoints: SurfacePoint[];
  section: Section;
  extent: Extent;
  canvasSize: CanvasSize;
  updatePointCoordinates: any; // quick fix as end of thesis
}

interface CirclePoint {
  x?: number;
  y?: number;
  z: number;
  id: string;
  color: string;
  param1: number;
}

export default function LayerPolygons({
  surfacePoints,
  surfaces,
  section,
  extent,
  canvasSize,
  updatePointCoordinates,
}: Props) {
  // find out which axis is selcted
  const axisIsX: boolean = section.p1[0] === section.p2[0] ? true : false;
  // calcualte projection distance depending on selected axis
  const projection_distance: number = axisIsX
    ? (extent.x_max - extent.x_min) / 1
    : (extent.y_max - extent.y_min) / 1;
  // filter surfacePoints that are in projection distance
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
  // resphape for konva-input
  const reshapedPoints = filteredSurfacePoints.map((surfacePoint) => {
    // destructure
    const { param1 } = surfacePoint;
    // get color of surface => depending on surface_order:
    const surfaceName: string = surfacePoint.surface;
    const suface = surfaces.filter((surface) => surface.name === surfaceName);
    const surfacePos = suface[0] ? suface[0].order_surface : 0;
    const color = COLOR_LIST[surfacePos];
    // calcualte circle position
    if (axisIsX) {
      const circlePoint: CirclePoint = {
        x: (surfacePoint.x / extent.x_max) * canvasSize.width,
        z: (surfacePoint.z / extent.z_max) * canvasSize.height,
        id: surfacePoint.id,
        color,
        param1,
      };
      return circlePoint;
    } else {
      const circlePoint: CirclePoint = {
        y: (surfacePoint.y / extent.y_max) * canvasSize.width,
        z: (surfacePoint.z / extent.z_max) * canvasSize.height,
        id: surfacePoint.id,
        color,
        param1,
      };
      return circlePoint;
    }
  });
  // retrun Layer of konva elements
  return (
    <Layer>
      {reshapedPoints.map((p) => {
        const { x, y, z, id, color, param1 } = p;
        const xval = x ? x : y; // depending if ploting along x or y
        return (
          <Points
            x={xval}
            z={z}
            key={id}
            id={id}
            color={color}
            param1={param1}
            updatePointCoordinates={updatePointCoordinates}
          />
        );
      })}
    </Layer>
  );
}

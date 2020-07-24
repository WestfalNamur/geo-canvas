import React from "react";
import { Layer } from "react-konva";
import { Surface } from "../../store/geoData/surfaces/types";
import { Orientation } from "../../store/geoData/orientations/types";
import { Section } from "../../store/meta/section/types";
import { Extent } from "../../store/meta/extent/types";
import { CanvasSize } from "../../store/canvas/canvasSize/types";
import { COLOR_LIST } from "../../utils/CONSTANTS";
import Stars from "./Stars";

interface Props {
  surfaces: Surface[];
  orientations: Orientation[];
  section: Section;
  extent: Extent;
  canvasSize: CanvasSize;
  updateOrientationCoordinates: any; // quick fix as end of thesis
}

interface OrientationStar {
  x?: number;
  y?: number;
  z: number;
  id: string;
  color: string;
  param1: number;
}

export default function LayerPolygons({
  orientations,
  surfaces,
  section,
  extent,
  canvasSize,
  updateOrientationCoordinates,
}: Props) {
  // find out which axis is selcted
  const axisIsX: boolean = section.p1[0] === section.p2[0] ? true : false;
  // calcualte projection distance depending on selected axis
  const projection_distance: number = axisIsX
    ? (extent.x_max - extent.x_min) / 10
    : (extent.y_max - extent.y_min) / 10;
  // filter surfacePoints that are in projection distance
  const filteredOrientaions: Orientation[] = orientations.filter(
    (orientation) => {
      if (axisIsX) {
        return (
          orientation.x > section.p1[0] - projection_distance &&
          orientation.x < section.p1[0] + projection_distance
        );
      } else {
        return (
          orientation.y > section.p1[1] - projection_distance &&
          orientation.y < section.p1[1] + projection_distance
        );
      }
    }
  );
  // resphape for konva-input
  const reshapedOrientaions = filteredOrientaions.map((orientation) => {
    // destructure
    const { param1 } = orientation;
    // get color of surface => depending on surface_order:
    const surfaceName: string = orientation.surface;
    const suface = surfaces.filter((surface) => surface.name === surfaceName);
    const surfacePos = suface[0] ? suface[0].order_surface : 0;
    const color = COLOR_LIST[surfacePos];
    // calcualte circle position
    if (axisIsX) {
      const orientationStar: OrientationStar = {
        x: (orientation.x / extent.x_max) * canvasSize.width,
        z: (orientation.z / extent.z_max) * canvasSize.height,
        id: orientation.id,
        color,
        param1,
      };
      return orientationStar;
    } else {
      const orientationStar: OrientationStar = {
        y: (orientation.y / extent.y_max) * canvasSize.width,
        z: (orientation.z / extent.z_max) * canvasSize.height,
        id: orientation.id,
        color,
        param1,
      };
      return orientationStar;
    }
  });
  // retrun Layer of konva elements
  return (
    <Layer>
      {reshapedOrientaions.map((o) => {
        const { x, y, z, id, color, param1 } = o;
        const xval = x ? x : y; // depending if ploting along x or y
        return (
          <Stars
            x={xval}
            z={z}
            key={id}
            id={id}
            color={color}
            param1={param1}
            updateOrientationCoordinates={updateOrientationCoordinates}
          />
        );
      })}
    </Layer>
  );
}

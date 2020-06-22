import React from "react";
import { Layer, Line } from "react-konva";
import { SectionPolygon } from "../../store/solutions/sectionPolygons/types";
import { Surface } from "../../store/geoData/surfaces/types";
import { COLOR_LIST } from "../../utils/CONSTANTS";

interface Props {
  polygons: SectionPolygon[]; // | SomeOtherPolygonType
  surfaces: Surface[];
}

export default function LayerPolygons({ polygons, surfaces }: Props) {
  return (
    <Layer>
      {polygons.map((polygon) => {
        const { name, points } = polygon;
        // Get color for polygon based on name of surface. Polygon names
        // inlcude the polygon number within the surface. It needs to be
        // removed from the string; To avoide possible undefined methodes
        // are called and if no position is found, black is assigned as
        // color;
        const SplitSurfName: string[] = name.split("_");
        SplitSurfName.pop();
        const polySurfName = SplitSurfName.join("_");
        const respectiveSurface = surfaces.filter(
          (surface) => surface.name === polySurfName
        );
        const pos = respectiveSurface[0].order_surface;
        const color = typeof pos === "number" ? COLOR_LIST[pos] : "black";

        return <Line key={name as string} points={points} stroke={color} />;
      })}
    </Layer>
  );
}

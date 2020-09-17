import React from "react";
import { Layer, Line } from "react-konva";
import { Section } from "../../../store/meta/section/types";
import { Extent } from "../../../store/meta/extent/types";
import { CanvasSize } from "../../../store/canvas/canvasSize/types";
import { COLOR_LIST } from "../../../utils/CONSTANTS";
import { SectionTop } from ".././../../store/solutions/sectionTops/types";
import { Surface } from "../../../store/geoData/surfaces/types";

interface Props {
  sectionTops: SectionTop[];
  section: Section;
  extent: Extent;
  canvasSize: CanvasSize;
  surfaces: Surface[];
}

export default function LayerSectionTops({
  sectionTops,
  section,
  canvasSize,
  surfaces,
}: Props) {
  const axisIsX: boolean = section.p1[0] === section.p2[0] ? true : false;
  // process coordinates  // 200 from section resolution
  const tops = sectionTops.map((top) => {
    const { xyzValues, blockSurface } = top;
    // xyzValues is x0,y0,x1,y1,... of the section. Needs to be recalculated
    const xz: number[] = xyzValues.map((value, index) => {
      if (axisIsX) {
        if (index % 2 === 0) {
          // z axis in section
          return (value / 200) * canvasSize.width;
        } else {
          // x axis as axisIsX === True
          return (value / 200) * canvasSize.height;
        }
      } else {
        if (index % 2 === 0) {
          // z axis in section
          return (value / 200) * canvasSize.width;
        } else {
          // y axis as axisIsX === False
          return (value / 200) * canvasSize.height;
        }
      }
    });
    // check if mutli real by blocksurface name
    let name: String = blockSurface;
    //@ts-ignore 
    if (blockSurface.split('_')[0] === "real") {
      //@ts-ignore 
      name = blockSurface.split('_')[2];
    }
    // get color of surface
    const suface = surfaces.filter((s) => s.name === name);
    const surfacePos = suface[0] ? suface[0].order_surface : 0;
    const color = COLOR_LIST[surfacePos];
    // return
    return { name, xz, color };
  });

  return (
    <Layer>
      {tops.map((top) => {
        const { name, xz, color } = top;
        return (
          <Line
            points={xz}
            //@ts-ignore
            key={name}
            stroke={color}
            strokeWidth={5}
            tension={2}
          />
        );
      })}
    </Layer>
  );
}

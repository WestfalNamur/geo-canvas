import React from "react";
import { Layer, Line } from "react-konva";
import { Section } from "../../store/meta/section/types";
import { Extent } from "../../store/meta/extent/types";
import { CanvasSize } from "../../store/canvas/canvasSize/types";
import { COLOR_LIST } from "../../utils/CONSTANTS";
import { SectionTop } from "./../../store/solutions/sectionTops/types";

interface Props {
  sectionTops: SectionTop[];
  section: Section;
  extent: Extent;
  canvasSize: CanvasSize;
}

/* TODO
 * 1. axis is inverted  // numpy [::-1,:]
 * Order of points leads to zick-zacklines
 * Ensure that dimensions are right
 */

export default function LayerSectionTops({
  sectionTops,
  section,
  extent,
  canvasSize,
}: Props) {
  const axisIsX: boolean = section.p1[0] === section.p2[0] ? true : false;
  // process coordinates  // 200 from section resolution
  const tops = sectionTops.map((top) => {
    const { xyzValues, blockSurface } = top;
    // xyzValues is x0,y0,x1,y1,... of the section. Needs to be recalculated
    const xz: number[] = xyzValues.map((value, index) => {
      if (axisIsX) {
        if (index % 2 == 0) {
          // z axis in section
          return (value / 200) * canvasSize.width;
        } else {
          // x axis as axisIsX == True
          return (value / 200) * canvasSize.height;
        }
      } else {
        if (index % 2 == 0) {
          // z axis in section
          return (value / 200) * canvasSize.width;
        } else {
          // y axis as axisIsX == False
          return (value / 200) * canvasSize.height;
        }
      }
    });
    return { blockSurface, xz };
  });

  return (
    <Layer>
      {tops.map((top) => {
        const { blockSurface, xz } = top;
        return (
          <Line
            points={xz}
            //@ts-ignore
            key={blockSurface}
            stroke="black"
            strokeWidth={5}
            tension={2}
          />
        );
      })}
    </Layer>
  );
}

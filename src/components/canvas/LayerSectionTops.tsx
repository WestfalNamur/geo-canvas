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

export default function LayerSectionTops({
  sectionTops,
  section,
  extent,
  canvasSize,
}: Props) {
  const axisIsX: boolean = section.p1[0] === section.p2[0] ? true : false;

  const tops = sectionTops.map((sectionTop) => {
    const { xyzValues, blockSurface } = sectionTop;
    const { xvals, yvals, zvals } = xyzValues;
    const ys = yvals.map((y) => (y / extent.y_max) * canvasSize.width);
    const xs = xvals.map((x) => (x / extent.x_max) * canvasSize.width);
    const zs = zvals.map((z) => (z / extent.z_max) * canvasSize.height);
    if (axisIsX) {
      let xzvals: number[] = [];
      ys.map((y, i) => {
        xzvals = [...xzvals, y, zs[i]];
      });
      return { blockSurface, xzvals };
    } else {
      let xzvals: number[] = [];
      xs.map((x, i) => {
        xzvals = [...xzvals, x, zs[i]];
      });
      return { blockSurface, xzvals };
    }
  });
  return (
    <Layer>
      {tops.map((top) => {
        const { blockSurface, xzvals } = top;
        return (
          <Line
            points={xzvals}
            //@ts-ignore
            key={blockSurface}
            stroke="black"
            strokeWidth={5}
          />
        );
      })}
    </Layer>
  );
}

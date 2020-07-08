import React from "react";
import { Layer, Circle } from "react-konva";
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

  const tops = sectionTops.map((sectionTop) => {
    const { xyzValues, blockSurface } = sectionTop;
    const { xvals, yvals, zvals } = xyzValues;
    const ys = yvals.map((y) => (y / extent.y_max) * canvasSize.width);
    const xs = xvals.map((x) => (x / extent.x_max) * canvasSize.width);
    const zs = zvals.map((z) => (z / extent.z_max) * canvasSize.height);
    if (axisIsX) {
      const xz = { xs: ys, zs: zs };
      return { blockSurface, xz };
    } else {
      const xz = { xs: xs, zs: zs };
      return { blockSurface, xz };
    }
  });
  return (
    <Layer>
      <Circle x={555} y={555} key={'adf'} radius={50} fill="black" />
      {tops.map((top) => {
        const { blockSurface, xz } = top;
        xz.xs.map((x, i) => {
          const y: number = xz.zs[i];
          const id: string = `${x}${y}`;
          return <Circle x={x} y={y} key={id} radius={5} fill="black" />;
        });
      })}
    </Layer>
  );
}

import { SectionPolygon } from "../../store/solutions/sectionPolygons/types";
import { Section } from "../../store/meta/section/types";
import { Extent } from "../../store/meta/extent/types";
import { CanvasSize } from "../../store/canvas/canvasSize/types";

export default function rescaleSectionPolygons(
  section: Section,
  canvasSize: CanvasSize,
  extent: Extent,
  sectionPolygons: SectionPolygon[]
) {
  // destructure and extract required data
  const { p1, p2 } = section;
  const { width, height } = canvasSize;
  const sectionHight = extent.z_max - extent.z_min;
  const distP1P2 = Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
  // rescale
  return sectionPolygons.map((sectionPolygon) => {
    const { name, points } = sectionPolygon;
    const reshapedPoints: number[] = points.map((value, i) => {
      if (i % 2 === 0) {
        return (value / distP1P2) * width; // xvals
      } else {
        return ((value / sectionHight) * height) * (-1) + height ; // yvals
      }
    });
    return { name, points: reshapedPoints };
  });
}

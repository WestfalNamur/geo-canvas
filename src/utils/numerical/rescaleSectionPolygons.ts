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
  // normalize polygons by deviding by section propotions
  // then scale to canvasSize;
  const { p1, p2 } = section;
  const { width, height } = canvasSize;
  // euclidian distance between p1 and p2
  const distP1P2: number = Math.sqrt(
    (p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2
  );
  // height of section = full height of model
  const sectionHight: number = extent.z_max - extent.z_min;
  // [x0, y0, x1, y1, ..., xn, yn]
  const resSectionPolygons: SectionPolygon[] = sectionPolygons.map(
    (sectPoly) => {
      const { name, points } = sectPoly;
      // inner function
      const reshaped: number[] = points.map((p, i) => {
        // xvals
        if (i % 2 == 0) {
          return (p / distP1P2) * width;
          // yvals
        } else {
          return (p / sectionHight) * height;
        }
      });
      return { name: name, points: reshaped };
    }
  );
  return resSectionPolygons;
}

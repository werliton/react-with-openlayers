import GeometryType from "ol/geom/GeometryType";
import Draw from "ol/interaction/Draw";
import { source } from "../layers/Layers";

const type: GeometryType = GeometryType.POLYGON;

const draw = new Draw({
  source,
  type,
});

draw.on("drawend", (evt) => {
  const feature: any = evt.feature;
  const p = feature?.getGeometry();
  console.log(p?.getCoordinates());
});

export default draw;

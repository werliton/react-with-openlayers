import GeometryType from "ol/geom/GeometryType";
import Draw from "ol/interaction/Draw";
import { source } from "../layers/Layers";

const type: GeometryType = GeometryType.POLYGON;

const draw = new Draw({
  source,
  type,
});

export default draw;

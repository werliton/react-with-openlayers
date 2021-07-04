import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import { Stroke, Circle as CircleStyle } from "ol/style";

const raster = new TileLayer({
  source: new OSM(),
});

const source = new VectorSource({ wrapX: false });

const vector = new VectorLayer({
  source,
  style: new Style({
    fill: new Fill({
      color: "rgba(12,220,23, 0.2)",
    }),
    stroke: new Stroke({
      color: "#ffcc33",
      width: 2,
    }),
    image: new CircleStyle({
      radius: 7,
      fill: new Fill({
        color: "#ffcc33",
      }),
    }),
  }),
});

const layers = [raster, vector];

export { layers, source };

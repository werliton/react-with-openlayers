import { View } from "ol";
import { fromLonLat } from "ol/proj";

const view = new View({
  center: fromLonLat([-44.3281612, -2.5604588]),
  zoom: 9,
});

export { view };

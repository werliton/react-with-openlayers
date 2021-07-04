import { Select } from "ol/interaction";
import { Circle, Fill, Stroke, Style } from "ol/style";

const style = new Style({
  image: new Circle({
    radius: 7,
    fill: new Fill({
      color: [0, 153, 255, 1],
    }),
    stroke: new Stroke({
      color: [255, 255, 255, 0.75],
      width: 1.5,
    }),
  }),
  zIndex: 100000,
});

const select = new Select({ style });

export default select;

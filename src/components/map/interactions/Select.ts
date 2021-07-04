import { Select } from "ol/interaction";
import { Circle, Fill, Stroke, Style } from "ol/style";

const select = new Select({
  style: new Style({
    image: new Circle({
      radius: 5,
      fill: new Fill({
        color: "#FF0000",
      }),
      stroke: new Stroke({
        color: "#fff",
      }),
    }),
  }),
});

export default select;

import Draw from "ol/interaction/Draw";
import Map from "ol/Map";
import { source } from "../layers/Layers";

const addInteraction = (map: Map | undefined) => {
  const type: any = "Polygon";

  let draw = new Draw({
    source,
    type,
  });

  map?.addInteraction(draw);
};

export { addInteraction };

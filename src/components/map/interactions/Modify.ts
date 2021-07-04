import { Modify } from "ol/interaction";
import { source } from "../layers/Layers";

const modify = new Modify({
  source: source,
});

export default modify;

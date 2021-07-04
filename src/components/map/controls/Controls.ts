import { defaults, ScaleLine } from "ol/control";

const scaleLine = new ScaleLine();

const controls = defaults({
  attributionOptions: {
    collapsible: false,
  },
}).extend([scaleLine]);

export default controls;

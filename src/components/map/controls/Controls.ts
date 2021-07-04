import { defaults, ScaleLine } from "ol/control";

const scaleLine = defaults({
  attributionOptions: {
    collapsible: false,
  },
}).extend([new ScaleLine()]);

export default scaleLine;

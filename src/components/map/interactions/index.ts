import { defaults } from "ol/interaction";
import draw from "./Draw";
import select from "./Select";

const interactions = defaults().extend([select, draw]);

export default interactions;

import { defaults } from "ol/interaction";
import draw from "./Draw";
import modify from "./Modify";
import select from "./Select";

const interactions = defaults().extend([select, draw, modify]);

export default interactions;

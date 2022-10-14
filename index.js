import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Apple from "./Apple/Apple.js";
import MoreCpc from "./MoreCpc/MoreCpc.js";
import MoreCps from "./MoreCps/MoreCps.js";
import Apple2 from "./Apple2/Apple2.js";
import Cheats from "./Cheats/Cheats.js";
import FasterCps from "./FasterCps/FasterCps.js";
import Score from "./Score/Score.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Apple: new Apple({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  MoreCpc: new MoreCpc({
    x: -58,
    y: -155,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  MoreCps: new MoreCps({
    x: 264,
    y: -150,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Apple2: new Apple2({
    x: -206,
    y: 139,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Cheats: new Cheats({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  FasterCps: new FasterCps({
    x: 80,
    y: -155,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Score: new Score({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Taxes: new Taxes({
    x: 191,
    y: 134,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Sprite1: new Sprite1({
    x: -158,
    y: -42,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;

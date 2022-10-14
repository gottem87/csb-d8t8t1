/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cheats extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Cheats/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Cheats/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("c")) {
        yield* this.cheating();
      }
      yield;
    }
  }

  *cheating() {
    yield* this.askAndWait("cheats");
    if (this.answer == "/apples100") {
      this.stage.vars.apples += 100;
    }
    if (this.answer == "/cps100") {
      this.stage.vars.cps += 100;
    }
    if (this.answer == "/cpc100") {
      this.stage.vars.cpc += 100;
    }
    if (this.answer == "/all100") {
      this.stage.vars.cpc += 100;
      this.stage.vars.cps += 100;
      this.stage.vars.apples += 100;
    }
    if (this.answer == "/all500") {
      this.stage.vars.cpc += 500;
      this.stage.vars.cps += 500;
      this.stage.vars.apples += 500;
    }
    if (this.answer == "/setscore_highscore") {
      this.stage.vars.apples = this.stage.vars.HighestScore;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.apples > 4999 && this.answer == "move_apple") {
        this.broadcast("move apple");
        this.stage.vars.apples += -5000;
      }
      yield;
    }
  }
}
